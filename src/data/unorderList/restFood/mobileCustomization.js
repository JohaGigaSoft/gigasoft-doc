import Atag from '../../../components/Atag';
import Mark from '../../../components/Mark';

export const localLanguage = [
  {
    id: 1,
    content: (
      <span className="info">
        Go to <Mark>/assets/language</Mark> and press right button on language
        folder and create new file and name it with your language code (.json).
        For example if your language is Bengali then you have to named your file
        as <Mark>bn.json</Mark>. You have to name it with proper and valid
        language code otherwise app won’t work. For getting language and country
        code you can visit this url:
        <Atag href="https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html" />
      </span>
    ),
  },
  {
    id: 2,
    content: (
      <span>
        Copy all data from <Mark>en.json</Mark> and paste it in your created
        file.
      </span>
    ),
  },
  {
    id: 3,
    content: (
      <span>
        Translate all English text placed here after colon(:) to your local
        language. There texts are in key-value formatted. You have to translate
        value only not key otherwise it won’t work. For example:{' '}
        <Mark>“home”: “Home” -&gt; “home”: “বাড়ি”</Mark>
      </span>
    ),
  },
  {
    id: 4,
    content: (
      <span>
        Add your country picture on <Mark>/assets/image</Mark> folder.
      </span>
    ),
  },
  {
    id: 5,
    content: (
      <span>
        Open <Mark>/lib/util/app_constrants.dart</Mark>, scroll down to bottom
        and add one more LanguageModel under languages array with your imageUrl,
        languageName, countryCode and languageCode. Again must remember that
        your language code and country code should valid otherwise app won’t
        work. In image url field you have to put your image path as
        <Mark>assets/image/added_country_picture_name.extension</Mark>. For
        example if your added country picture name is{' '}
        <Mark>bangladesh.png</Mark> then path will be
        <Mark>assets/image/bangladesh.png</Mark>.
      </span>
    ),
  },
];

export const appColor = [
  {
    id: 1,
    content: (
      <span>
        Open <Mark>&lt;project&gt;/lib/theme/light_theme.dart</Mark> file and
        set primary, accent and etc. colours for light theme.
      </span>
    ),
  },
  {
    id: 2,
    content: (
      <span>
        In the same way open{' '}
        <Mark>&lt;project&gt;/lib/theme/dark_theme.dart</Mark> file and set
        preferred primary, accent and etc. color for dark theme.
      </span>
    ),
  },
];

export const appFont = [
  {
    id: 1,
    content: (
      <span className="info">
        Download you preferred font from internet. Google has many free font you
        can check them:
        <Atag href="https://fonts.google.com/" />
      </span>
    ),
  },
  {
    id: 2,
    content: (
      <span>
        Unzip fonts and paste it them to{' '}
        <Mark>&lt;project&gt;/assets/font/</Mark> folder.
      </span>
    ),
  },
  {
    id: 3,
    content: (
      <span>
        Mentioned them in <Mark>&lt;project&gt;/pubspec.yaml</Mark> file like:
        fonts:
        <ul className="mt-1">
          <li>
            <Mark>family: YOUR_FONT_FAMILY_NAME</Mark> fonts
          </li>
          <ul className="mt-1">
            <li>
              <Mark>family: YOUR_FONT_FAMILY_NAME</Mark> fonts
            </li>
          </ul>
        </ul>
      </span>
    ),
  },
  {
    id: 4,
    content: (
      <span>
        Replace font family name in{' '}
        <Mark>&lt;project&gt;/lib/theme/light_theme.dart</Mark>,
        <Mark>&lt;project&gt;/lib/theme/dark_theme.dart</Mark> and
        <Mark>&lt;project&gt;/lib/util/styles.dart</Mark> file.
      </span>
    ),
  },
];
