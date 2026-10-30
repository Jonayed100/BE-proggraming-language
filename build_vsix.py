"""
Build the VS Code extension file (be-language-<version>.vsix) without Node.js.

Run from the project folder:

    python vscode-be/build_vsix.py

Then in VS Code: Extensions panel -> "..." menu -> "Install from VSIX..." and
choose the .vsix file this script made inside the vscode-be folder.

Run it again whenever you change the colors file or package.json.
"""

import json
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
FILES = [
    "package.json",
    "language-configuration.json",
    "syntaxes/be.tmLanguage.json",
    "README.md",
]

CONTENT_TYPES = """<?xml version="1.0" encoding="utf-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension=".json" ContentType="application/json"/>
  <Default Extension=".md" ContentType="text/markdown"/>
  <Default Extension=".vsixmanifest" ContentType="text/xml"/>
</Types>
"""

MANIFEST = """<?xml version="1.0" encoding="utf-8"?>
<PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011" xmlns:d="http://schemas.microsoft.com/developer/vsx-schema-design/2011">
  <Metadata>
    <Identity Language="en-US" Id="{name}" Version="{version}" Publisher="{publisher}" />
    <DisplayName>{display_name}</DisplayName>
    <Description xml:space="preserve">{description}</Description>
    <Categories>Programming Languages</Categories>
    <Properties>
      <Property Id="Microsoft.VisualStudio.Code.Engine" Value="{engine}" />
      <Property Id="Microsoft.VisualStudio.Code.ExtensionDependencies" Value="" />
      <Property Id="Microsoft.VisualStudio.Code.ExtensionPack" Value="" />
      <Property Id="Microsoft.VisualStudio.Code.ExtensionKind" Value="workspace" />
    </Properties>
  </Metadata>
  <Installation>
    <InstallationTarget Id="Microsoft.VisualStudio.Code" />
  </Installation>
  <Dependencies />
  <Assets>
    <Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true" />
    <Asset Type="Microsoft.VisualStudio.Services.Content.Details" Path="extension/README.md" Addressable="true" />
  </Assets>
</PackageManifest>
"""


def main():
    package = json.loads((HERE / "package.json").read_text(encoding="utf-8"))
    manifest = MANIFEST.format(
        name=package["name"],
        version=package["version"],
        publisher=package["publisher"],
        display_name=package["displayName"],
        description=package["description"],
        engine=package["engines"]["vscode"],
    )
    output = HERE / f"{package['name']}-{package['version']}.vsix"
    with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as vsix:
        vsix.writestr("[Content_Types].xml", CONTENT_TYPES)
        vsix.writestr("extension.vsixmanifest", manifest)
        for name in FILES:
            vsix.write(HERE / name, f"extension/{name}")
    print(f"Made {output}")


if __name__ == "__main__":
    main()
