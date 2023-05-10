import {reactive} from 'vue';

export const store = reactive({
  headerMenu: [
    'Home',
    'Courses',
    'Abouts Us',
    'News',
    'Pages',
    'Contact',
    'Purchase'
  ],

  dropMenu: {
    home: [
      'Driving School',
      'High School',
      'Kinder Garten',
      'Header Video'
    ],
    courses: [
      'Our Courses',
      'Single Course',
      'Instructor Profile',
      'Become A Teacher'
    ],
    news: [
      'Edu Prime Blog',
      'Single Post',
      'Category Posts'
    ],
    pages: [
      'How It Works',
      'Single Event',
      'University Shop',
      'Single Product'
    ]
  }
}) 