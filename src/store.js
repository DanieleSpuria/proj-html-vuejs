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

  faculties: {
    top: {
      h2: 'Faculties available at EduPrime',
      p: 'A single university with a load of courses, tailored to satisfy any student’s needs.'
    },
    bottom: {
      law: {
        imgV2: 'Gavel-v2.png',
        img: 'Gavel-Illustration-e1556884768193.png',
        h3: 'Law Faculty',
        p: 'Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        active: true
      },
      economy: {
        imgV2: 'Coins-tabs-v2.png',
        img: 'Economy.png',
        h3: 'Economy',
        p: 'Economics focuses on the behaviour and interactions of economic agents and how economies work. Microeconomics analyzes basic elements in the economy, including individual agents and markets, their interactions, and the outcomes of interactions, including unemployment of resource.',
        active: false
      },
      medicine: {
        imgV2: 'Medicine-tabs-v2.png',
        img: 'Medicine.png',
        h3: 'Medicine',
        p: 'Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.',
        active: false
      },
      computerScience: {
        imgV2: 'Computer-tabs-v2.png',
        img: 'Computer-Science.png',
        h3: 'Computer Science',
        p: 'Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation software systems.',
        active: false
      },
      graphicDesign: {
        imgV2: 'Palette-tabs-v2.png',
        img: 'Graphic-Design.png',
        h3: 'Graphic Design',
        p: 'Graphic design is the process of visual communication and problem-solving through the use of typography, photography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term ``graphic design`` is used synonymously.',
        active: false
      }
    }
  },

  year: {
    h2: 'University Year',
    img: 'Clock-and-Bell.png',
    imgTime: 'Timeline-Item.png',
    textTop: {
      demo: {
        h5: 'Demo Classes',
        p: 'In the first week, students try to accommodate with the teaching style and choose their optional courses.'
      },
      graduation: {
        h5: 'Graduation Day',
        p: 'On the day of graduation, all students gather for the ceremony and then network and party among others.'
      }
    },
    textBottom: {
      orientation: {
        h5: 'Orientation',
        p: 'First day of the university year, all students gather for the opening ceremony and then network with others.'
      },
      evaluation: {
        h5: 'Evaluation',
        p: 'At the end of a semester, students take a general evaluation test for every subject they’re learning.'
      }
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