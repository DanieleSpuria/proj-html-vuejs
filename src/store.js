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
  }
}) 