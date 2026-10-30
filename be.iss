; BE installer for Windows (BE-Setup.exe), made with Inno Setup: https://jrsoftware.org/isinfo.php
; GitHub builds it for you on every release. To build it yourself on Windows:
;   python tools/build_exe.py      (makes dist\be-windows.exe)
;   iscc installer\be.iss          (makes dist\BE-Setup.exe)
; It installs be.exe for the current user (no administrator needed) and adds it to PATH,
; so `be run file.be` works in any new terminal, without installing Python.

#define AppVersion "3.0.0"

[Setup]
AppId={{6C1B7E2A-3F4D-4E8B-9A51-BE0000000003}
AppName=BE
AppVersion={#AppVersion}
AppVerName=BE {#AppVersion}
AppPublisher=Jonayed Hossain
AppComments=BE, the Banglish programming language
DefaultDirName={autopf}\BE
DefaultGroupName=BE
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=dialog
ChangesEnvironment=yes
OutputDir=..\dist
OutputBaseFilename=BE-Setup
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
LicenseFile=..\LICENSE
UninstallDisplayName=BE {#AppVersion}

[Files]
Source: "..\dist\be-windows.exe"; DestDir: "{app}"; DestName: "be.exe"; Flags: ignoreversion
Source: "..\README.md"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\LICENSE"; DestDir: "{app}"; Flags: ignoreversion
Source: "..\examples\*"; DestDir: "{app}\examples"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "..\playground\*"; DestDir: "{app}\playground"; Flags: ignoreversion

[Icons]
Name: "{group}\BE (interactive)"; Filename: "{app}\be.exe"; WorkingDir: "{userdocs}"
Name: "{group}\BE Playground"; Filename: "{app}\playground\index.html"
Name: "{group}\BE examples"; Filename: "{app}\examples"
Name: "{group}\Uninstall BE"; Filename: "{uninstallexe}"

[Registry]
; Add BE to PATH, so the `be` command works in every terminal
Root: HKCU; Subkey: "Environment"; ValueType: expandsz; ValueName: "Path"; ValueData: "{olddata};{app}"; Check: NeedsAddPath(ExpandConstant('{app}'))

[Run]
Filename: "{app}\playground\index.html"; Description: "Open the BE Playground"; Flags: postinstall shellexec skipifsilent unchecked

[Code]
function NeedsAddPath(Dir: string): Boolean;
var
  Paths: string;
begin
  if not RegQueryStringValue(HKEY_CURRENT_USER, 'Environment', 'Path', Paths) then
  begin
    Result := True;
    exit;
  end;
  Result := Pos(';' + Uppercase(Dir) + ';', ';' + Uppercase(Paths) + ';') = 0;
end;

procedure CurUninstallStepChanged(CurUninstallStep: TUninstallStep);
var
  Paths, Dir: string;
  P: Integer;
begin
  if CurUninstallStep <> usPostUninstall then exit;
  if not RegQueryStringValue(HKEY_CURRENT_USER, 'Environment', 'Path', Paths) then exit;
  Dir := ExpandConstant('{app}');
  P := Pos(';' + Uppercase(Dir), Uppercase(Paths));
  if P > 0 then
  begin
    Delete(Paths, P, Length(Dir) + 1);
    RegWriteExpandStringValue(HKEY_CURRENT_USER, 'Environment', 'Path', Paths);
  end;
end;
