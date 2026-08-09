export type HerokuappOptionConfig = {
  href: string;
  expectedPath: string;
};

const HEROKUAPP_OPTIONS: Readonly<Record<string, HerokuappOptionConfig>> = {
  'A/B Testing': { href: '/abtest', expectedPath: '/abtest' },
  'Add/Remove Elements': { href: '/add_remove_elements/', expectedPath: '/add_remove_elements/' },
  'Basic Auth': { href: '/basic_auth', expectedPath: '/basic_auth' },
  'Broken Images': { href: '/broken_images', expectedPath: '/broken_images' },
  'Challenging DOM': { href: '/challenging_dom', expectedPath: '/challenging_dom' },
  Checkboxes: { href: '/checkboxes', expectedPath: '/checkboxes' },
  'Context Menu': { href: '/context_menu', expectedPath: '/context_menu' },
  'Digest Authentication': { href: '/digest_auth', expectedPath: '/digest_auth' },
  'Disappearing Elements': { href: '/disappearing_elements', expectedPath: '/disappearing_elements' },
  'Drag and Drop': { href: '/drag_and_drop', expectedPath: '/drag_and_drop' },
  Dropdown: { href: '/dropdown', expectedPath: '/dropdown' },
  'Dynamic Content': { href: '/dynamic_content', expectedPath: '/dynamic_content' },
  'Dynamic Controls': { href: '/dynamic_controls', expectedPath: '/dynamic_controls' },
  'Dynamic Loading': { href: '/dynamic_loading', expectedPath: '/dynamic_loading' },
  'Entry Ad': { href: '/entry_ad', expectedPath: '/entry_ad' },
  'Exit Intent': { href: '/exit_intent', expectedPath: '/exit_intent' },
  'File Download': { href: '/download', expectedPath: '/download' },
  'File Upload': { href: '/upload', expectedPath: '/upload' },
  'Floating Menu': { href: '/floating_menu', expectedPath: '/floating_menu' },
  'Forgot Password': { href: '/forgot_password', expectedPath: '/forgot_password' },
  'Form Authentication': { href: '/login', expectedPath: '/login' },
  Frames: { href: '/frames', expectedPath: '/frames' },
  Geolocation: { href: '/geolocation', expectedPath: '/geolocation' },
  'Horizontal Slider': { href: '/horizontal_slider', expectedPath: '/horizontal_slider' },
  Hovers: { href: '/hovers', expectedPath: '/hovers' },
  'Infinite Scroll': { href: '/infinite_scroll', expectedPath: '/infinite_scroll' },
  Inputs: { href: '/inputs', expectedPath: '/inputs' },
  'JavaScript Alerts': { href: '/javascript_alerts', expectedPath: '/javascript_alerts' },
  'JavaScript onload event error': { href: '/javascript_error', expectedPath: '/javascript_error' },
  'JQuery UI Menus': { href: '/jqueryui/menu', expectedPath: '/jqueryui/menu' },
  'Key Presses': { href: '/key_presses', expectedPath: '/key_presses' },
  'Large & Deep DOM': { href: '/large', expectedPath: '/large' },
  'Multiple Windows': { href: '/windows', expectedPath: '/windows' },
  'Nested Frames': { href: '/nested_frames', expectedPath: '/nested_frames' },
  'Notification Messages': {
    href: '/notification_message',
    expectedPath: '/notification_message_rendered',
  },
  'Redirect Link': { href: '/redirector', expectedPath: '/redirector' },
  'Secure File Download': { href: '/download_secure', expectedPath: '/download_secure' },
  'Shadow DOM': { href: '/shadowdom', expectedPath: '/shadowdom' },
  'Shifting Content': { href: '/shifting_content', expectedPath: '/shifting_content' },
  'Slow Resources': { href: '/slow', expectedPath: '/slow' },
  'Sortable Data Tables': { href: '/tables', expectedPath: '/tables' },
  'Status Codes': { href: '/status_codes', expectedPath: '/status_codes' },
  Typos: { href: '/typos', expectedPath: '/typos' },
  'WYSIWYG Editor': { href: '/tinymce', expectedPath: '/tinymce' },
};

export function getHerokuappOptionConfig(option: string): HerokuappOptionConfig {
  const config = HEROKUAPP_OPTIONS[option];

  if (!config) {
    throw new Error(`Unknown the-internet option: ${option}`);
  }

  return config;
}
