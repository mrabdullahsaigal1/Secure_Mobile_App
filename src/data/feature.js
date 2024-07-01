export default features = [
  {
    id: 4,
    featureName: 'Wrong Pin Lock',
    category: 'Device Safety Features',
    descriptions:
      'Locks the phone and takes a photo of anyone entering the wrong PIN',
    logo: require('../assets/icons/cancel2.jpg'),
    featureId: 'wrongPinLock',
  },
  {
    id: 5,
    featureName: "Don't Touch My Phone",
    category: 'Device Safety Features',
    descriptions:
      'Triggers an alarm and takes a photo if someone moves your phone',
    logo: require('../assets/icons/cancel.jpg'),
    featureId: 'dontTouchMyPhone',
  },
  {
    id: 6,
    featureName: 'Charging Protection',
    category: 'Device Safety Features',
    descriptions: 'Alerts you if your phone is unplugged while charging',
    logo: require('../assets/icons/charge.jpg'),
    featureId: 'chargingProtection',
  },
  {
    id: 7,
    featureName: 'Pocket Thief Mode',
    category: 'Device Safety Features',
    descriptions: 'Triggers an alarm if your phone is taken out of your pocket',
    logo: require('../assets/icons/theif.jpg'),
    featureId: 'pocketThiefMode',
  },
  {
    id: 8,
    featureName: 'Contact Backup',
    category: 'Device Safety Features',
    descriptions: 'Automatically backs up your contacts to a secure location',
    logo: require('../assets/icons/contact.jpg'),
    featureId: 'contactBackup',
  },
  {
    id: 9,
    featureName: 'USB Eject',
    category: 'Device Safety Features',
    descriptions: 'Notifies you if an unauthorized USB device is connected',
    logo: require('../assets/icons/usb.jpg'),
    featureId: 'usbEject',
  },
  {
    id: 10,
    featureName: 'Do Not Power Off',
    category: 'Device Safety Features',
    descriptions:
      'Prevents unauthorized power off attempts by locking the screen',
    logo: require('../assets/icons/power.jpg'),
    featureId: 'doNotPowerOff',
  },
  {
    id: 11,
    featureName: 'Emergency Mode',
    category: 'Device Safety Features',
    descriptions: 'Quick SOS button to alert contacts with your location',
    logo: require('../assets/icons/service.jpg'),
    featureId: 'sosButton',
  },
  {
    id: 12,
    featureName: 'Emergency Contact',
    category: 'Additional Setting',
    descriptions: 'Alerts contacts when your battery is low',
    logo: require('../assets/icons/emergencycall.jpg'),
    featureId: 'emergencyContact',
  },
  {
    id: 13,
    featureName: 'Subscription',
    category: 'Additional Setting',
    descriptions:
      'Notifies contacts automatically if you are in a car accident',
    logo: require('../assets/icons/subscribe.jpg'),
    featureId: 'subscription',
  },
  {
    id: 14,
    featureName: `Freind's Notification`,
    category: 'Additional Setting',
    descriptions: 'Remotely activate a loud alarm to find your phone',
    logo: require('../assets/icons/mobile-phone.jpg'),
    featureId: 'notification',
  },
  {
    id: 15,
    featureName: 'Wrong Password History',
    category: 'Additional Setting',
    descriptions: 'Locate your phone and remotely capture evidence via website',
    logo: require('../assets/icons/time.jpg'),
    featureId: 'wrongPassHistory',
  },
  {
    id: 18,
    featureName: 'IMEI Check',
    category: 'Government Reporting Tools',
    descriptions: 'Verify a phone IMEI before buying to ensure authenticity',
    logo: require('../assets/icons/search.jpg'),
    featureId: 'imeiCheck',
  },
  {
    id: 16,
    featureName: 'Lost Phone Reporter',
    category: 'Government Reporting Tools',
    descriptions:
      'Report lost or stolen phones to authorities with essential details',
    logo: require('../assets/icons/phone.jpg'),
    featureId: 'lostPhoneReporter',
  },
  {
    id: 17,
    featureName: 'Found Phone Reactivation',
    category: 'Government Reporting Tools',
    descriptions: 'Reactivate a found phone securely with ownership proof',
    logo: require('../assets/icons/reactivated.jpg'),
    featureId: 'foundPhoneReactivation',
  },
];
