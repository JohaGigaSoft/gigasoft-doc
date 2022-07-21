import Mark from '../../../components/Mark';

export const mobileMandatorySetup = [
  {
    id: 1,
    content: (
      <span>
        Go to <Mark>&lt;project&gt;/assets/image/</Mark> and replace logo.png
        with your own logo
      </span>
    ),
  },
  {
    id: 2,
    content: (
      <span>
        Go to <Mark>&lt;project&gt;/assets/image/</Mark> and replace
        logo_name.png with your company name image.
      </span>
    ),
  },
  {
    id: 3,
    content: (
      <span>
        Then go to <Mark>/android/app/src/main/res</Mark> and replace all mipmap
        folder with your <Mark>&lt;generated icon&gt;/android</Mark> folder.
      </span>
    ),
  },
  {
    id: 4,
    content: (
      <span>
        Again go to <Mark>/android/app/src/main/res</Mark> and and replace
        Assets.xcassets with your generated Assets.xcassets folder.
      </span>
    ),
  },
];

export const firebaseSetupOne = [
  {
    id: 1,
    content: (
      <span className="info">
        Create your own firebase project from
        <a
          href="https://firebase.flutter.dev/docs/messaging/apple-integration"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://console.firebase.google.com
        </a>
        <span style={{ color: '#e3442e' }}></span> and also add an android app
        there with your own package name and app name.
      </span>
    ),
  },
];

export const firebaseSetupTwo = [
  {
    id: 1,
    content: (
      <span>
        Click register app and download <Mark>google-services.json</Mark> file
        from there.
      </span>
    ),
  },
  {
    id: 2,
    content: (
      <span>
        Copy that file and paste it under{' '}
        <Mark>&lt;project&gt;/android/app/ folder</Mark>.
      </span>
    ),
  },
  {
    id: 3,
    content: (
      <span>
        Create a totally white png logo for notification icon. Paste it on
        <Mark>&lt;project&gt;/android/app/src/main/res/drawable/</Mark> and
        replace <Mark>notification_icon.png</Mark> with your whiter version
        logo.
      </span>
    ),
  },
  {
    id: 4,
    content: (
      <span className="info">
        For IOS again create an app under same project and download
        <Mark>GoogleService-Info.plist</Mark> and paste it under
        <Mark>&lt;project&gt;/iOS/</Mark> folder. Also follow this documentation
        for full setup for IOS:
        <a
          href="https://console.firebase.google.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://console.firebase.google.com
        </a>
      </span>
    ),
  },
  {
    id: 5,
    content: (
      <span>
        Paste firebase server key in admin panel Notification Settings section.
        You can get server key from{' '}
        <Mark>
          Firebase project settings-&gt;Cloud Messaging-&gt;Server Key
        </Mark>
        .
      </span>
    ),
  },
];

export const mapApiSetup = [
  {
    id: 1,
    content: (
      <span className="info">
        You need to generate the google API key. Visit this link -
        <a
          href="https://firebase.flutter.dev/docs/messaging/apple-integration"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://developers.google.com/maps/documentation/embed/get-api-key
        </a>
      </span>
    ),
  },
  {
    id: 2,
    content: (
      <span>
        You need to enabled mentione APIs: Direction API, Distance Matrix API,
        Geocoding API, Maps SDK for Android, Maps SDK for iOS, Place API.
      </span>
    ),
  },
  {
    id: 3,
    content: (
      <span className="info">
        You have to enable billing account. Visit this url for activating:
        <a
          href="https://firebase.flutter.dev/docs/messaging/apple-integration"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://support.google.com/googleapi/answer/6158867?hl=en
        </a>
      </span>
    ),
  },
  {
    id: 4,
    content:
      ' After generating API key, you have to put it on 3 different place for Android, iOS and web.',
  },
];
