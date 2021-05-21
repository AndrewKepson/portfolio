const Classes = {
  pages: {
    about: {
      wrapper:
        'flex flex-wrap items-center -mb-4 md:mb-0 px-4 lg:pt-12 lg:px-12 text-gray-500',
      textContainer: 'w-full lg:w-1/2 px-20 mb-4 md:mb-0 text-xl lg:text-lg',
      heading:
        'text-5xl text-gray-600 mb-6 leading-tight font-semibold font-heading',
      leadingRelaxed: 'mb-4 leading-relaxed',
      imgContainer: 'w-full lg:w-1/2 px-4 mb-4 md:mb-0',
    },
    contact: {
      form: {
        nameLabel: 'block text-gray-700 text-sm font-bold mb-2',
        nameInput:
          'appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none',
        emailLabel: 'block text-gray-700 text-sm font-bold mb-2',
        emailInput:
          'appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none',
        dropdownLabel: 'block text-gray-700 text-sm font-bold mb-2',
        dropdown:
          'appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none',
        dropdownArrow:
          'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
        messageLabel: 'block text-gray-700 text-sm font-bold mb-2',
        messageInput:
          'appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none',
        submitButton:
          'inline-block w-full py-4 px-8 leading-none text-white bg-purple-400 hover:bg-purple-600 font-semibold rounded shadow',
      },
    },
  },
  components: {
    blogCard: {
      cardContainer: 'lg:w-4/12 md:w-6/12 p-4 w-full',
      card: 'bg-gray-100 shadow-lg',
      img: 'w-full',
      slugStyle: 'block hover:text-purple-400 mb-2 text-gray-800',
      anchorText: 'font-bold leading-tight text-xl',
      date: 'font-semibold leading-tight mb-2 text-gray-600 text-xs',
    },
    portfolioCard: {
      cardWrapper: 'w-full p-4 lg:w-1/3',
      card: 'bg-gray-100 h-full px-6 py-16 rounded-lg shadow-lg',
      header: 'font-bold mb-2 text-gray-900 text-xl',
      content: 'mb-4 text-lg',
      anchorText: 'text-purple-400 hover:text-purple-600',
    },
    developmentCard: {
      card: 'bg-gray-100 h-full mb-5 px-4 py-6 lg:pb-0 shadow-lg',
      cardLayout:
        'lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8',
      cardImageWrapper: 'col-span-1 px-4 self-center',
      cardImage: 'rounded-tl-lg rounded-br-lg shadow-lg lg:shadow-md',
      cardContentWrapper: 'mt-6 lg:m-0 lg:col-span-2 lg:pl-8',
      cardContent:
        'mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none',
      description: 'text-gray-800 font-medium text-2xl lg:text-xl',
      footer: 'mt-6 flex flex-row flex-wrap justify-around items-center',
      deployedProjectButton:
        'bg-gray-600 hover:bg-gray-500 w-full lg:mx-2 m-2 p-6 flex flex-none lg:flex-1 justify-center text-base font-medium text-gray-100 transition-colors duration-150 cursor-pointer',
      githubProjectButton:
        'bg-gray-500 hover:bg-gray-600 w-full md:mx-2 m-2 p-6 flex flex-none lg:flex-1 justify-center text-base font-medium text-gray-100 transition-colors duration-150 cursor-pointer',
    },
    writingSample: {
      sampleWrapper: 'flex-1',
      sampleImage: 'w-full',
      sampleContent: 'p-4',
      sampleTitle: 'text-sm text-gray-500',
      sampleDate: 'text-sm text-gray-500',
      sampleExcerpt: 'mt-3 text-base text-gray-500',
      sampleAnchor:
        'text-base font-semibold text-purple-600 hover:text-purple-500',
    },
    writingSamples: {
      container: 'container flex flex-wrap justify-center',
      content: 'grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12',
    },
  },
  templates: {
    blog: {
      wrapper:
        'flex flex-col mx-5 md:mx-28 lg:mx-44 xl:mx-60 relative py-6 overflow-hidden',
      h1: 'mb-5 text-center text-7xl md:text-6xl',
      content: 'my-8  md:mt-12 lg:mt-14 text-left text-2xl md:text-xl',
      date: 'self-end text-lg',
    },
    sample: {
      wrapper:
        'flex flex-col mx-4 md:mx-28 lg:mx-36 items-center text-2xl lg:text-xl',
      h1: 'text-5xl md:text-6xl lg:text-7xl py-4 lg:py-8 md:text-center',
    },
  },
}

export default Classes
