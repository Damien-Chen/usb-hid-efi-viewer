*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${BROWSER}        headlesschrome
${FILE_URL}       ${CURDIR}/src/index.html

*** Test Cases ***
Verify Page Title
    [Documentation]    Opens the local index.html and checks the title.
    Open Browser    file://${FILE_URL}    ${BROWSER}
    Title Should Be    USB HID & UEFI EDK2 Keyboard Code Viewer
    [Teardown]    Close Browser

Verify Header Text
    [Documentation]    Checks if the main header is visible and correct.
    Open Browser    file://${FILE_URL}    ${BROWSER}
    Element Should Contain    css:h1    USB HID & UEFI EDK2 Key Code Viewer
    [Teardown]    Close Browser

Verify Key Hover Functionality
    [Documentation]    Verifies that hovering over keys updates the info panel correctly.
    Open Browser    file://${FILE_URL}    ${BROWSER}
    Set Window Size    1920    1080
    
    # Test Key 'A' (HID 0x04)
    Verify Key Info    4    A    0x04    EfiKeyC1
    
    # Test Key 'Enter' (HID 0x28)
    Verify Key Info    40    Enter    0x28    EfiKeyEnter
    
    # Test Key 'Escape' (HID 0x29)
    Verify Key Info    41    Escape    0x29    EfiKeyEsc

    # Test Key '1' (HID 0x1E)
    Verify Key Info    30    1 !    0x1E    EfiKeyE1

    [Teardown]    Close Browser

*** Keywords ***
Verify Key Info
    [Arguments]    ${hid_dec}    ${expected_name}    ${expected_hid_code}    ${expected_efi_key}
    [Documentation]    Hovers over a key identified by its decimal HID value and verifies info panel.
    
    # Select the key by its data-hid attribute (calculated from decimal)
    # The data-hid attribute in HTML is merely the decimal number
    ${key_locator}=    Set Variable    css:.key[data-hid="${hid_dec}"]
    
    # Wait for key to be present in DOM
    Wait Until Page Contains Element    ${key_locator}

    # Scroll to element to ensure visibility
    Scroll Element Into View    ${key_locator}
    
    # Wait for key to be visible and hover
    Wait Until Element Is Visible    ${key_locator}
    Mouse Over    ${key_locator}
    
    # Wait for Info Panel to be active (check opacity or class if needed, or just check text)
    Wait Until Element Is Visible    id:infoPanel
    
    # Verify Key Name
    Element Text Should Be    id:keyName    ${expected_name}
    
    # Verify HID Code
    Element Text Should Be    id:hidCode    ${expected_hid_code}
    
    # Verify EFI Key
    Element Text Should Be    id:efiKey    ${expected_efi_key}
