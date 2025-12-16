*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${BROWSER}        headlesschrome
${FILE_URL}       ${CURDIR}/index.html

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
