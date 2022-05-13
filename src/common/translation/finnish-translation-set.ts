import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const finnishTranslationSet: TranslationSet = {
    trayIconShow: "Näytä",
    trayIconSettings: "Asetukset",
    trayIconQuit: "Lopeta",

    userConfirmationProceed: "Jatketaanko?",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "Hakutuloksia ei löytynyt",

    refreshingIndexesPending: "Päivitetään indeksejä",

    ueliCommandClearCaches: "Tyhjennä välimuisti",
    ueliCommandClearCachesDescription: "Tyhjentää kaikkien laajennuksien välimuistit",
    ueliCommandEditSettingsFile: "Muokkaa asetustiedostoa",
    ueliCommandEditSettingsFileDescription: "Muokkaa asetustiedostoa oletustekstieditorilla",
    ueliCommandExit: "Lopeta",
    ueliCommandExitDescription: "Poistu ueli sovelluksesta",
    ueliCommandOpenSettings: "Asetukset",
    ueliCommandOpenSettingsDescription: "Muuta asetuksia",
    ueliCommandRefreshIndexes: "Päivitä indeksit",
    ueliCommandRefreshIndexesDescription: "Päivittää kaikkien laajennuksien indeksit",
    ueliCommandReload: "Lataa uudelleen",
    ueliCommandReloadDescription: "Lataa ueli uudelleen",

    generalErrorTitle: "Virhe tapahtui",
    generalErrorDescription: "Tarkista lokista lisätietoja",

    successfullyRefreshedIndexes: "Indeksit päivitettiin onnistuneesti",
    successfullyClearedCaches: "Välimuistit tyhjennettiin onnistuneesti",
    successfullyUpdatedconfig: "Asetustiedosto päivitetiin onnistuneesti",
    successfullyClearedExecutionLog: "Suoritusloki tyhjennettiin onnistuneesti",

    commandlineSearchResultDescription: "Suorita {{command}}",

    noFavoritesFoundDescription: "Suorituslokisi on tyhjä",
    noFavoritesFoundTitle: "Suosikkeja ei löytynyt",

    // settings
    settings: "Asetukset",

    generalSettingsMenuSection: "Yleiset",
    pluginSettingsMenuSection: "Laajennukset",

    generalSettings: "Yleiset",
    generalSettingsLanguage: "Kieli",
    generalSettingsLogExecution: "Lokien suorittaminen",
    generalSettingsPersistentUserInput: "Pysyvä käyttäjän syöte",
    generalSettingsAutostartApp: "Käynnistä sovellus automaattisesti järjestelmän käynnistyessä",
    generalSettingsShowTrayIcon: "Näytä kuvake tehtäväpalkissa",
    generalSettingsClearCachesOnExit: "Tyhjennä välimuistit lopetettaessa",
    generalSettingsHotKey: "Pikanäppäin",
    generalSettingsRescanIntervalEnabled: "Säännöllinen uudelleentarkastus käytössä",
    generalSettingsRescanInterval: "Uudelleentarkastusväli (sekunteina)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "Näytä aina ensisijaisessa näytössä",
    generalSettingsRememberWindowPosition: "Muista ikkunan sijainti",
    generalSettingsExportSettings: "Vie nykyiset asetukset",
    generalSettingsSuccessfullyExportedSettings: "Asetukset vietiin onnistuneesti",
    generalSettingsImportSettings: "Tuo asetukset",
    generalSettingsImportFileFilterJsonFiles: "JSON-tiedostot",
    generalSettingsImportErrorInvalidConfig:
        "Asetusten tuonti epäonnistui: tiedoston sisältö näyttää olevan virheellinen",
    generalSettingsResetAllSettings: "Palauta kaikki asetukset oletusasetuksiin",
    generalSettingsResetWarning: "Olet palauttamassa kaikki yleiset asetukset oletusasetuksiin. Haluatko jatkaa?",
    generalSettingsResetAllSettingsWarning: "Olet palauttamassa KAIKKI asetukset oletusasetuksiin. Haluatko jatkaa?",
    generalSettingsClearExecutionLogWarning: "Olet tyhjentämässä suorituslokia. Haluatko jatkaa?",
    generalSettingsHideMainWindowAfterExecution: "Piilota ikkuna suorituksen jälkeen",
    generalSettingsHideMainWindowOnBlur: "Piilota ikkuna, kun tarkennus katoaa",
    generalSettingsDecimalSeparator: "Desimaalierotin",
    generalSettingsCheckingForUpdate: "Tarkistetaan, onko päivitys saatavilla",
    generalSettingsDownloadUpdate: "Lataa päivitys",
    generalSettingsDownloadingUpdate: "Ladataan päivitystä",
    generalSettingsLatestVersion: "Käytössäsi on uusin versio!",
    generalSettingsErrorWhileCheckingForUpdate: "Virhe päivityksen tarkastamisen aikana",
    clearExecutionLog: "Tyhjennä suoritusloki",
    openDebugLog: "Avaa vianmääritysloki",
    openTempFolder: "Avaa väliaikainen kansio",

    hotkeyKeyBackspace: "Askelpalautin",
    hotkeyKeyDelete: "Delete",
    hotkeyKeyDown: "Alas",
    hotkeyKeyEnd: "End",
    hotkeyKeyEscape: "Escape",
    hotkeyKeyHome: "Home",
    hotkeyKeyInsert: "Insert",
    hotkeyKeyLeft: "Vasen",
    hotkeyKeyPageDown: "PageDown",
    hotkeyKeyPageUp: "PageUp",
    hotkeyKeyPlus: "Plus",
    hotkeyKeyReturn: "Return",
    hotkeyKeyRight: "Oikea",
    hotkeyKeySpace: "Välilyönti",
    hotkeyKeyTab: "Sarkain",
    hotkeyKeyUp: "Ylös",
    hotkeyModifierAlt: "Alt",
    hotkeyModifierAltGr: "AltGr",
    hotkeyModifierCommand: "Cmd",
    hotkeyModifierControl: "Ctrl",
    hotkeyModifierOption: "Option",
    hotkeyModifierShift: "Vaihto",
    hotkeyModifierSuper: "Super",

    appearanceSettings: "Ulkonäkö",
    appearanceSettingsWindowWidth: "Ikkunan leveys (pikseleinä)",
    appearanceSettingsMaxSearchResultsPerPage: "Maksimi hakutulokset per sivu",
    appearanceSettingsSearchResultHeight: "Hakutuloksen korkeus (pikseleinä)",
    appearanceSettingsSmoothScrolling: "Sulava vieritys",
    appearanceSettingsUserInputHeight: "Käyttäjän syötteen korkeus (pikseleinä)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Näytä kuvaus kaikissa hakutuloksissa",
    appearanceSettingsShowSearchIcon: "Näytä hakukuvake hakukentässä",
    appearanceSettingsShowSearchResultNumbers: "Näytä hakutulosten lukumäärät",
    appearanceSettingsResetWarningMessage:
        "Olet palauttamassa kaikki ulkoasun asetukset oletusasetuksiin. Haluatko jatkaa?",
    appearanceSettingsAllowTransparentBackground: "Salli läpinäkyvä tausta",
    appearanceSettingsFontFamily: "Fonttiperhe",
    appearanceSettingsUserInputBorderRadius: "Käyttäjän syötteen reunuksen säde",
    appearanceSettingsUserInputBottomMargin: "Käyttäjän syötteen alin marginaali (pikseleinä)",
    appearanceSettingsSearchResultsBorderRadius: "Hakutulosten reunuksen säde",
    appearanceSettingsScrollbarBorderRadius: "Vierityspalkin reunuksen säde",
    appearanceSettingsBorderRadiusDescription:
        "Tämä on css-arvo, joten sinun on lisättävä 'px' tällä tavalla '10px' tai erilliset kulmat tällä tavalla '10px 0px 10px 5px",
    appearanceSettingsUserInputFontWeight: "Käyttäjän syötteen fonttipaino",
    appearanceSettingsSearchResultNameFontWeight: "Hakutuloksen nimen fonttipaino",
    appearanceSettingsSearchResultDescriptionFontWeight: "Hakutuloksen kuvauksen fonttipaino",
    appearanceSettingsUserInputFontSize: "Käyttäjän syötteen fonttikoko",
    appearanceSettingsSearchResultDescriptionFontSize: "Hakutuloksen nimen fonttikoko",
    appearanceSettingsSearchResultNameFontSize: "Hakutuloksen kuvauksen fonttikoko",

    settingsUserInputTitle: "Käyttäjän syöte",
    settingsSearchResultsBoxTitle: "Hakutulosruutu",
    settingsScrollbarTitle: "Vierityspalkki",
    settingsGeneralTitle: "Yleiset",

    colorThemeSettings: "Väriteema",
    colorThemeSettingsImportColorTheme: "Tuo väriteema",
    colorThemeSettingsExportColorTheme: "Vie väriteema",
    colorThemeSettingsResetWarning: "Olet palauttamassa kaikki väriteeman asetukset oletusasetuksiin. Haluatko jatkaa?",
    colorThemeExportSucceeded: "Väriteema viety onnistuneesti",
    colorThemeExportFailed: "Väriteeman vienti epäonnistui",
    colorThemeImportSucceeded: "Väriteema tuotu onnistuneesti",
    colorThemeImportFailed: "Väriteeman tuonti epäonnistui",
    colorThemeInvalidColorTheme: "Virheellinen väriteema",
    colorThemePresets: "Esiasetukset",
    colorthemeUserInputBackgroundColor: "Käyttäjän syötteen taustaväri",
    colorThemeUserInputTextColor: "Käyttäjän syötteen tekstin väri",
    colorThemeSearchResultsBackgroundColor: "Hakutulosten taustaväri",
    colorThemeSearchResultsItemActiveBackgroundColor: "Hakutulosten aktiivinen taustaväri",
    colorThemeSearchResultsItemActiveTextColor: "Hakutulosten aktiivisen tekstin väri",
    colorThemeSearchResultsItemActiveDescriptionColor: "Hakutulosten aktiivisen kuvauksen väri",
    colorThemeSearchResutlsItemNameTextColor: "Hakutulosten nimen tekstin väri",
    colorThemeSearchResultsItemDescriptionTextColor: "Hakutulosten kuvauksen tekstin väri",
    colorThemeScrollbarForegroundColor: "Vierityspalkin korostus väri",
    colorThemeScrollbarBackgroundColor: "Vierityspalkin taustaväri",

    colorPicker: "Värinvalitsin",

    applicationSearchSettings: "Sovellusten haku",
    applicationSearchSettingsDescription: `Tämä laajennus etsii sovelluksia tietokoneeltasi. Voit määrittää kansiot, joihin sovellukset on asennettu, sekä sen, mitä tiedostopäätteitä käytetään sovelluksien tunnistamisessa.`,
    applicationSearchSettingsApplicationFolders: "Sovelluskansiot",
    applicationSearchSettingsApplicationFolder: "Sovelluskansio",
    applicationSearchSettingsFolderPath: "Kansion polku",
    applicationSearchSettingsRemoveAction: "Poista",
    applicationSearchSettingsAddApplicationFolder: "Lisää sovelluskansio",
    applicationSearchSettingsApplicationFileExtensions: "Sovelluksen tiedostopäätteet",
    applicationSearchSettingsApplicationFileExtension: "Tiedostopääte",
    applicationSearchSettingsAddApplicationFileExtension: "Lisää tiedostopääte",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" ei ole kelvollinen tiedostopääte`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} ei ole kansio"`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} ei ole olemassa"`,
    applicationSearchSettingsFolderValidationError: `Tapahtui virhe "{{value}}" vahvistuksen aikana`,
    applicationSearchSettingsUseNativeIcons:
        "Käytä natiivikuvakkeita (pois päältä kytkettynä saattaa parantaa suorituskykyä)",

    searchEngineSettings: "Hakukone",
    searchEngineSettingsDescription: `Hakukonetta käytetään valmiiksi indeksoituihin kohteisiin, kuten sovelluksiin, oikoteihin ja käyttöjärjestelmän asetuksiin/käskyihin.`,
    searchEngineSettingsFuzzyness: "Sumeus",
    searchEngineSettingsFuzzynessDescription: "0 = tiukka, 1 = sumea",
    searchEngineSettingsStrict: "Tiukka",
    searchEngineSettingsFuzzy: "Sumea",
    searchEngineSettingsBlacklist: "Mustalista",
    searchEngineSettingsMaxSearchResults: "Maksimi hakutulokset",
    searchEngineSettingsResetWarning: "Olet palauttamassa kaikki hakukoneasetukset oletusasetuksiin. Haluatko jatkaa?",

    shortcutSettings: "Oikotiet",
    shortcutSettingsDescription: `Tämän laajennuksen avulla voit avata tiedostoja tai verkkosivustoja nopeasti luomalla omia oikoteitä.`,
    shortcutSettingsTableType: "Tyyppi",
    shortcutSettingsTableName: "Nimi",
    shortcutSettingsTableExecutionArgument: "Suoritusargumentti",
    shortcutSettingsTableDescription: "Kuvaus",
    shortcutSettingsTableTags: "Tunnisteet",
    shortcutSettingsTableIcon: "Kuvake",
    shortcutSettingsTableEdit: "Muokkaa",
    shortcutSettingsTableDelete: "Poista",
    shortcutSettingsAddShortcut: "Lisää oikotie",
    shortcutSettingsEditModalImageUrl: "Kuvan URL",
    shortcutSettingsEditModalSvgString: "SVG-merkkijono",
    shortcutSettingsEditModalColor: "Väri",
    shortcutSettingsEditModalGoogleWebsite: "Googlen verkkosivut",
    shortcutSettingsEditModalDownloadsFolder: "Lataukset kansio",
    shortcutSettingsEditModalCommand: "Komento",
    shortcutSettingsInvalidShortcutErrorMessage: "Virheellinen oikotie",
    shortcutSettingsTagPlaceholder: "Lisää tunniste ja paina enteriä",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeCommandlineTool: "Komentorivityökalu",
    shortcutSettingsEditModalCommandLinetoolDescription: "Muokkaa tiedostoa Visual Studio Codessa",
    shortcutSettingsNeedsUserConfirmation: "Tarvitsee vahvistuksen ennen toteutusta",

    translationSettingsTranslation: "Käännökset",
    translationSettingsDescription: `Tämän laajennuksen avulla voit kääntää nopeasti sanoja tai lyhyitä lauseita. Se käyttää epävirallista API:ta (https://github.com/imankulov/linguee-api) Lingueelle (https://linguee.de) ja saattaa olla epävakaa.`,
    translationSettingsDebounceDelay: "Debounce-viive (millisekunneissa)",
    translationSettingsMinSearchTermLength: "Hakusanan vähimmäispituus",
    translationSettingsPrefix: "Etuliite",
    translationSettingsSourceLanguage: "Lähdekieli",
    translationSettingsTargetLanguage: "Kohdekieli",

    everythingSearch: "Etsi kaikki",
    everythingSearchSettingDescription: `Tämän laajennuksen avulla voit käyttää Everything- hakua paikallisten tiedostojen ja kansioiden etsimiseen paikallisesta tiedostojärjestelmästä. Sinun on asennettava "Everything" ja "Everything Command-line Interface" osoitteesta https://www.voidtools.com/downloads/. Molempien asentamisen jälkeen sinun on määritettävä tiedostopolku 'es.exe'lle alla.`,
    everythingSearchPathToBinary: `Polku tiedostoon "es.exe"`,
    everythingSearchPrefix: "Etuliite",
    everythingSearchMaxSearchResults: "Maksimi hakutulokset",
    everythingSearchPathToBinaryFilterName: "Suoritettavat tiedostot",

    mdfindSearch: "mdfind search",
    mdfindSettingsDescription:
        "Tämän laajennuksen avulla voit käyttää macOS:n omaa hakua etsiessäsi tiedostoja ja kansioita paikallisesta tiedostojärjestelmästäsi.",
    mdfindSearchDebounceDelay: "Debounce-viive (millisekunneissa)",
    mdfindSearchPrefix: "Etuliite",
    mdfindSearchMaxSearchResults: "Maksimi hakutulokset",

    websearch: "Verkkohaku",
    websearchSettingDescription: `Tämän laajennuksen avulla voit etsiä nopeasti internetistä suosikkihakukoneellasi perustamalla omia verkkohakukoneita.`,
    websearchEngines: "Verkkohakukoneet",
    websearchEditingModalTitleAdd: "Lisää verkkohakukone",
    websearchEditingModalTitleEdit: "Muokkaa verkkohakukonetta",
    websearchName: "Nimi",
    websearchPrefix: "Etuliite",
    websearchUrl: "URL",
    websearchSuggestionUrl: "Ehdotus URL",
    websearchIcon: "Kuvake",
    websearchPriority: "Prioriteetti",
    websearchIsFallback: "Varasuunnitelma",
    websearchEncodeSearchTerm: "Koodaa hakusana",
    websearchInvalidWebsearchEngine: "Virheellinen verkkohakukone",
    websearchDescription: `Etsi {{websearch_engine}}-haulla "{{search_term}}"`,

    fileBrowser: "Tiedostoselain",
    fileBrowserSettingsDescription: `Tämän laajennuksen avulla voit selata paikallista tiedostojärjestelmääsi. Aloittaaksesi sinun on annettava kelvollinen absoluuttinen tiedostopolku.`,
    fileBrowserSettingsMaxSearchResults: "Maksimi hakutulokset",
    fileBrowserOptionsShowHiddenFiles: "Näytä piilotetut tiedostot",
    fileBrowserOptionsBlackList: "Mustalista",
    fileBrowserOptionsBlackListPlaceholder: "Tiedoston tai kansion nimi",

    operatingSystemCommands: "Käyttöjärjestelmän komennot",
    operatingSystemCommandsSettingsDescription: `Käyttöjärjestelmäkomennot ovat yksinkertaisia komentoja, joilla voit hallita käyttöjärjestelmääsi, esimerkiksi sammuttaa tai käynnistää tietokoneen uudelleen.`,

    operatingSystemSettings: "Käyttöjärjestelmän asetukset",
    operatingSystemSettingsSettingsDescription:
        "Tämän laajennuksen avulla voit löytää käyttöjärjestelmän asetukset nopeasti.",

    macOsShutdown: "Sammuta",
    macOsShutdownDescription: "Sammuta tietokone",
    macOsRestart: "Käynnistä uudelleen",
    macOsRestartDescription: "Käynnistä tietokone uudelleen",
    macOsLogout: "Kirjaudu ulos",
    macOsLogoutDescription: "Kirjaa nykyinen käyttäjä ulos",
    macOsSleep: "Lepotila",
    macOsSleepDescription: "Aseta tietokone lepotilaan",
    macOsLock: "Lukitse",
    macOsLockDescription: "Lukitse tietokone",

    windowsShutdown: "Sammuta",
    windowsShutdownDescription: "Sammuta tietokone",
    windowsRestart: "Käynnistä uudelleen",
    windowsRestartDescription: "Käynnistä tietokone uudelleen",
    windowsReboot: "Käynnistä uudelleen",
    windowsSignout: "Kirjaudu ulos",
    windowsSignoutDescription: "Kirjaa nykyinen käyttäjä ulos",
    windowsLock: "Lukitse",
    windowsLockDescription: "Lukitse tietokone",
    windowsSleep: "Lepotila",
    windowsSleepDescription: "Aseta tietokone lepotilaan",
    windowsHibernation: "Horrostila",
    windowsHibernationDescription: "Aseta tietokone horrostilaan",

    calcuator: "Laskin",
    calculatorCopyToClipboard: "Paina enteriä kopioidaksesi leikepöydälle",
    calculatorDescription: "Tämän laajennuksen avulla voit tehdä nopeasti yksinkertaisia laskutoimituksia.",
    calculatorPrecision: "Tarkkuus",

    openUrlWithBrowser: "Avaa verkkoselaimella",
    url: "URL",
    urlDescription: "Tämän laajennuksen avulla voit avata verkkosivustoja nopeasti kirjoittamalla URL-osoitteen.",
    urlDefaultProtocol: "Oletusprotokolla",

    email: "Sähköposti",
    emailSettingsDescription:
        "Tämän laajennuksen avulla voit nopeasti aloittaa sähköpostin kirjoittamisen kirjoittamalla sähköpostiosoitteen.",
    openNewMail: "Avaa uusi sähköposti",

    currencyConverter: "Valuuttamuunnin",
    currencyConverterDescription:
        "Tämän laajennuksen avulla voit muuntaa valuutat nopeasti. Uusimmat muuntokurssit tarjoaa https://exchangeratesapi.io/.",
    currencyConverterPrecision: "Tarkkuus",
    currencyConverterCopyToClipboard: "Paina enteriä kopioidaksesi leikepöydälle",

    workflows: "Työnkulut",
    workflowSettingsDescription: "Tämän laajennuksen avulla voit nopeasti suorittaa useita asioita kerralla.",
    workflowSettingsAddWorkflow: "Lisää työnkulku",
    workflowName: "Nimi",
    workflowNamePlaceholder: "Lisää työnkulun nimi tähän",
    workflowDescription: "Kuvaus",
    workflowDescriptionPlaceholder: "Lisää työnkulun kuvaus tähän",
    workflowTags: "Tunnisteet",
    workflowIcon: "Kuvake",
    workflowExecutionSteps: "Suoritusvaiheet",
    workflowExecutionArgumentType: "Suoritusargumentin tyyppi",
    workflowExecutionArgumentTypeCommandlineTool: "Komentorivityökalu",
    workflowExecutionArgumentTypeUrl: "URL",
    workflowInvalidExecutionStep: "Virheellinen suoritusvaihe",
    workflowInvalidWorkflow: "Virheellinen työnkulku",
    workflowNeedsUserConfirmationBeforeExecution: "Tarvitsee vahvistuksen ennen toteutusta",

    commandline: "Komentorivi",
    commandlinePrefix: "Etuliite",
    commandlineSettingsDescription: "Tämän laajennuksen avulla voit suorittaa komentorivikomentoja nopeasti.",
    commandlineShell: "Tulkki",

    simpleFolderSearch: "Yksinkertainen kansiohaku",
    simpleFolderSearchDescription: "Tämän laajennuksen avulla voit etsiä nopeasti tiedostoja tai kansioita.",
    simpleFolderSearchRecursive: "Toistuva tiedostojen skannaus",
    simpleFolderSearchExcludeHiddenFiles: "Poissulje piilotetut tiedostot",
    simpleFolderSearchFolderPath: "Kansion polku",
    simpleFolderSearchAddFolder: "Lisää kansio",
    simpleFolderSearchEditFolder: "Muokkaa kansiota",

    uwpSettingsDescription: "Tämän laajennuksen avulla voit etsiä esiasennettuja UWP-sovelluksia.",

    colorConverter: "Värimuunnin",
    colorConverterDescription: "Tämän laajennuksen avulla voit muuntaa värit nopeasti eri muotoihin.",
    colorConverterShowColorPreview: "Näytä värin esikatselu",

    dictionary: "Sanakirja",
    dictionaryDescription:
        "Tämän laajennuksen avulla voit etsiä nopeasti sanojen määritelmiä ja synonyymejä. Se käyttää epävirallista Google Dictionary API:ta (https://dictionaryapi.dev/).",
    dictionaryPrefix: "Etuliite",
    dictionaryMinSearchTermLength: "Hakusanan vähimmäispituus",
    dictionaryDebounceDelay: "Debounce-viive (millisekunneissa)",

    browserBookmarks: "Selaimen kirjanmerkit",
    browserBookmarksDescription: "Tämän laajennuksen avulla voit etsiä selaimesi kirjanmerkkejä.",
    browserBookmarksBrowser: "Selain",
    browserBookmarksUseFavicons: "Käytä faviconeja",
    browserBookmark: "Kirjanmerkki",

    cancel: "Peruuta",
    save: "Tallenna",
    add: "Lisää",
    remove: "Poista",
    edit: "Muokkaa",
    forExample: "Esimerkiksi",
    example: "Esimerkki",
    iconType: "Kuvakkeen tyyppi",
    iconTypeColor: "Väri",
    showFullFilePath: "Näytä koko tiedostopolku",
    yes: "Kyllä",
    no: "Ei",
    resetToDefault: "Palauta oletusasetukset?",
    resetPluginSettingsToDefaultWarning:
        "Olet aikeissa palauttaa tämän laajennuksen kaikki asetukset oletusasetuksiin. Haluatko jatkaa?",
    filePath: "Tiedostopolku",
    folderPath: "Kansiopolku",
    chooseFile: "Valitse tiedosto",
    chooseFolder: "Valitse kansio",
    restartRequired: "Uudelleenkäynnistys vaaditaan",

    controlPanel: "Ohjauspaneeli",
    controlPanelSettingsDescription: "Tämän laajennuksen avulla voit löytää ohjauspaneelin kohteet nopeasti.",

    weather: "Sää",
    weatherPrefix: "Etuliite",
    weatherSettingsDescription:
        "Tämän laajennuksen avulla voit tarkistaa minkä tahansa alueen säätilan. Jos aluetta ei ole annettu, se näyttää oletusarvoisesti nykyisen sijaintisi sään. Tiedot toimittaa wttr.in",
    weatherTemperatureUnit: "Lämpötilan yksikkö",
    weatherCopyToClipboard: "Paina enteriä kopioidaksesi leikepöydälle",
};