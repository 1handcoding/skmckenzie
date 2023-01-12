export default [
  {
    name: 'Conditional Rendering',
    rationale: "Conditional rendering can be used to toggle visibility.Here it is employed to initially hide advanced accessibility features.This allows accessibility options to be anchored at the top of the page, where they are easy to locate, without obstructing the page flow for users who don't want or need them"
  },
  {
    name: 'Dynamic Classes',
    rationale: "Vue's ability to seamlessly alter CSS classes is leveraged to alter the rendering of individual page elements. While many users benefit from having larger buttons that are easier to see and press, a user with a limited field of vision or who uses screen enlargement might find the larger buttons disruptive. Being able to alternate between one or more options for an element helps the site meet a variety of needs simultaneously with a minimum of code."
  },
  {
    name: 'useTitle from vueUse',
    rationale: "While vueUse provides a tremendous number of useful functions, the site currently uses only useTitle. The title is dynamically updated with the name of the current tab panel."
  },
  {
    name: 'Vue Router',
    rationale: "Currently the page utilizes Vue Router to approximate the ARIA tablist format. While this allows the page to present in a familiar format, I'm currently evaluating whether or not this could be better accomplished using a combination of dynamic classes and conditional rendering. The page as is cannot properly manage focus or accommodate the recommended bypass links."
  },
  ]