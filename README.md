# USB HID & UEFI EDK2 Keyboard Code Viewer

An interactive web-based tool to visualize and lookup USB HID Usage IDs and their corresponding UEFI EDK2 `UsbKbDxe` driver key codes.

## Features

- **Interactive Keyboard Layout**: Hover over any key to view its details.
- **Multi-Layout Support**:
  - **US ANSI** (104-key)
  - **European ISO** (105-key)
  - **Japanese JIS** (109-key)
- **Real-time Data Display**:
  - **Key Name**: The physical label of the key.
  - **HID Usage ID**: The standard USB HID code (Hex & Decimal).
  - **EFI Key**: The internal key code used by EDK2 (`EfiKeyC1`, `EfiKeyEnter`, etc.).
  - **EFI Scan Code**: The EFI scan code returned by `SimpleTextIn` protocol (if applicable).
- **Modern UI**: Dark theme with glassmorphism effects and responsive design.

## Technical Details

This tool maps **USB HID Usage Page 0x07 (Keyboard/Keypad)** codes to the **EFI_KEY** enumeration used in the EDK2 UEFI firmware development kit.

- **HID Source**: [USB HID Usage Tables](https://www.usb.org/hid)
- **EFI Source**: [EDK2 Source Code](https://github.com/tianocore/edk2)
  - `MdePkg/Include/Protocol/SimpleTextIn.h`
  - `MdePkg/Include/Uefi/UefiInternalFormRepresentation.h`
  - `MdeModulePkg/Bus/Usb/UsbKbDxe/KeyBoard.c`

## Usage

1. Open `index.html` in any modern web browser.
2. Select your preferred keyboard layout (ANSI, ISO, or JIS) from the top switcher.
3. Hover your mouse over any key to see the mapping information in the panel above.

## Deployment

This project consists of static files (`index.html`, `index.css`, `index.js`) and can be deployed anywhere.

### GitHub Pages
1. Push the code to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Select the `main` branch and `/ (root)` folder.
4. Save and wait for the deployment URL.

## License

MIT License