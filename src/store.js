import {reactive} from 'vue';

export const store = reactive({
  navMenu: {
    home: {
      name: 'Home',
      menu: [
        'Driving School',
        'High School',
        'Kinder Garten',
        'Header Video'
      ]
    },
    courses: {
      name: 'Courses',
      menu: [
        'Our Courses',
        'Single Course',
        'Instructor Profile',
        'Become A Teacher'
      ]
    },
    aboutsUs: {
      name: 'Abouts Us'
    },
    news: {
      name: 'News',
      menu: [
        'Edu Prime Blog',
        'Single Post',
        'Category Posts'
      ]
    },
    pages: {
      name: 'Pages',
      menu: [
        'How It Works',
        'Single Event',
        'University Shop',
        'Single Product'
      ]
    },
    contact: {
      name: 'Contact',
    },
    purchase: {
      name: 'Purchase',
    }
  },

  slideJumbo: {
    showCase: {
      h1: 'Shocase your courses',
      img: 'theme_slider1_bg-1.jpg'
    },
    key: {
      h1: 'Key to your success',
      img: 'theme_slider2_bg-1.jpg'
    },
    lead: {
      h1: 'Lead. Inspire. Win!',
      img: 'theme_slider3_bg-1.jpg'
    },
  },

  p: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universitiesm courses, secondary schools etc.',

  courses: {
    text: {
      img: 'Books-icon.png',
      h2: 'Thousands of courses for any type of student',
      p: 'At EduPrime, it doesn’t matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.',
      btn: 'Browse through courses'
    },
    img: 'Graduation-Illustration.png'
    
  },

  footerMenu: {
    eduPrime: {
      name: 'Get EduePrime',
      menu: [
        'Request a website',
        'Browse Themes',
        'Payment options',
        'Support System',
        'Checkout',
        'Purchase Theme'
      ]
    },
    networking: {
      name: 'Networking',
      menu: [
        'Purchase Theme',
        'Our Benefits',
        'Our Team',
        'Our Services',
        'Other Products',
        'My account'
      ]
    }
  },

  footerTag: [
    'ECONOMY',
    'DESIGN',
    'COACHING',
    'BUSINESS',
    'MEDICINE',
    'LAW',
    'FITNESS'
  ]
}) 