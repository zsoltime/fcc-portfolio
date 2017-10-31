import '../../../node_modules/waypoints/lib/noframework.waypoints';

export default function Reveal(settings) {
  const {
    element,
    onInit,
    onReach,
    fireOnce = true,
    offset = '50%',
  } = settings;

  if (typeof onInit === 'function') {
    onInit();
  }

  // eslint-disable-next-line no-new, no-undef
  new Waypoint({
    element,
    offset,
    handler: function handle() {
      onReach();
      if (fireOnce) {
        this.destroy();
      }
    },
  });
}
