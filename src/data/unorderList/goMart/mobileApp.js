import Mark from '../../../components/Mark';

export const mobileApp = [
  {
    id: 1,
    content: 'Flutter SDK setup (version 3.0 Stable)',
  },
  {
    id: 2,
    content: 'JDK with path setup (only for vs code)',
  },
  {
    id: 3,
    content: 'Xcode for IPA file build',
  },
];

export const countryFilterOne = [
  {
    id: 1,
    content: (
      <span>
        If you want your country only in country choosing dialog which we saw in
        login, registration and forget password page, you have to set your
        default country first from admin panel Business Setup section. Then open
        <Mark>&lt;project&gt;/lib/view/screens/auth/sign_in_screen.dart</Mark>
        file and search CodePickerWidget. Now add a parameter with value like
        this:
      </span>
    ),
  },
];

export const countryFilterTwo = [
  {
    id: 1,
    content: (
      <span>
        If you want to disable country choosing dialog the just remove
        <Mark>showDropDownButton: true</Mark>, parameter and add one parameter
        like this:
      </span>
    ),
  },
];
