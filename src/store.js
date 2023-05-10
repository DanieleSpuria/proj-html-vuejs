import {reactive} from 'vue';

export const store = reactive({
  navMenu: {
    li: {
      name: 'Home',
      menu: [
        'Driving School',
        'High School',
        'Kinder Garten',
        'Header Video'
      ]
    },
    li: {
      name: 'Courses',
      menu: [
        'Our Courses',
        'Single Course',
        'Instructor Profile',
        'Become A Teacher'
      ]
    },
    li: {
      name: 'Abouts Us'
    },
    li: {
      name: 'News',
      menu: [
        'Edu Prime Blog',
        'Single Post',
        'Category Posts'
      ]
    },
    li: {
      name: 'Pages',
      menu: [
        'How It Works',
        'Single Event',
        'University Shop',
        'Single Product'
      ]
    },
    li: {
      name: 'Contact',
    },
    li: {
      name: 'Purchase',
    }
  }
}) 