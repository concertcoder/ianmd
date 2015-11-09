'use strict';

angular.module('ianmd.constants', [])
  .constant('kAppVersion', 61)
  .constant('kFacilities', {
    '5193366551': {
      id: '5193366551',
      street: '229 Wellington St',
      city: 'Sarnia',
      state: 'Ontario',
      postal: 'N7T 1G9',
      phone: '(519) 336-6551',
      name: 'Vision Nursing Home'
    },
    '4163433244': {
      street: '25 Brunswick Ave',
      city: 'Toronto',
      state: 'Ontario',
      postal: 'M5S 2L9',
      phone: '416-343-3244',
      name: 'Kensington Gardens'
    },
    '4162223211': {
      street: '801 King Street West',
      city: 'Toronto',
      state: 'Ontario',
      postal: 'M5V 3C9',
      phone: '416-222-3211',
      name: 'Viki Chan\'s Son'
    }
  })
  .constant('kUserTypes', {
    'PSW': 'Personal Support Worker',
    'FAMILY_CAREGIVER': 'Family Caregiver',
    'PATIENT': 'Patient',
    'FAMILY': 'Family'
  })
  .constant('kPatientInputFields', {
    'id': {
      id: 'id',
      display: 'User Id',
      value: '',
    },
    'profilepic': {
      id: 'profilepic',
      display: 'Profile Picture',
      value: '',
    },
    'roomnum': {
      id: 'roomnum',
      display: 'Room #',
      value: '',
    },
    'gender': {
      id: 'gender',
      display: 'Gender',
      value: 'Her',
    },
    'age': {
      id: 'age',
      display: 'Age',
      value: '65',
    },
    'ohip': {
      id: 'ohip',
      display: 'Room #',
      value: '',
    },
    'residencesince': {
      id: 'residencesince',
      display: 'Residence Since',
      value: 'Dec 2014',
    },
    'facility': {
      id: 'facility',
      display: 'Facility',
      value: '',
    },
    'lastUpdated': {
      id: 'lastUpdated',
      display: 'Last Updated',
      value: ''
    },
    'firstname': {
      id: 'firstname',
      display: 'First Name',
      value: ''
    },
    'lastname': {
      id: 'lastname',
      display: 'Last Name',
      value: ''
    },
    'drinkPreferences': {
      section: 'Needs',
      id: 'drinkPreferences',
      display: 'I prefer drinks from',
      tableDisplay: 'Drink preferences',
      value: [
        {
          drink: 'Coffee',
          timeOfDay: 'Mornings',
          preperation: 'Taken black with a little sugar'
        },
        {
          drink: 'Yerba Mate',
          timeOfDay: 'Afternoon to Evening',
          preperation: 'Shared with Maria, another resident of South American heritage'
        },
        {
          drink: 'Herbal Tea',
          timeOfDay: 'Late Evening',
          preperation: 'Usually chamomile, sometimes lemon tea'
        }
      ]
    },
    'ethnicFoodOrigin': {
      section: 'Needs',
      id: 'ethnicFoodOrigin',
      display: 'I prefer foods from',
      tableDisplay: 'Preferred foods',
      editable: true,
      options: [
        'South America',
        'Western Europe',
        'Eastern Europe',
        'Middle East',
        'West Africa',
        'South Africa',
        'Southeast Asia',
        'China',
        'Polynesia'
      ],
      value: ''
    },
    'healthyFood': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'healthyFood',
      display: 'It is important to me that the food I eat is healthy',
      tableDisplay: 'Health Conscious',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'hotBreakfast': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'hotBreakfast',
      display: 'It is important to me that I have a hot breakfast',
      tableDisplay: 'Hot Breakfast',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'hotLunch': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'hotLunch',
      display: 'It is important to me that I have a hot lunch',
      tableDisplay: 'Hot Lunch',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'hotDinner': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'hotDinner',
      display: 'It is important to me that I have a hot dinner',
      tableDisplay: 'Hot Dinner',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'spicyFood': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'spicyFood',
      display: 'I like spicy food',
      tableDisplay: 'Spicy Tolerance',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'sweetFood': {
      section: 'Needs',
      id: 'sweetFood',
      display: 'I like sweet food',
      tableDisplay: 'Sweet Tooth',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'saltyFood': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'saltyFood',
      display: 'I like salty food',
      tableDisplay: 'Salt Food',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'unseasonedFood': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'unseasonedFood',
      display: 'I prefer unseasoned or lightly-seasoned food',
      tableDisplay: 'Light Seasoning',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'breakfastTime': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'breakfastTime',
      display: 'I prefer to have breakfast',
      tableDisplay: 'Breakfast Time',
      editable: true,
      options: ['Early in the morning', 'Mid-morning', 'Late morning'],
      value: 'Mid-morning'
    },
    'lunchTime': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'lunchTime',
      display: 'I prefer to have lunch',
      tableDisplay: 'Lunch Time',
      editable: true,
      options: ['Before noon', 'Around noon', 'After noon'],
      value: 'Around noon'
    },
    'dinnerTime': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'dinnerTime',
      display: 'I prefer to have dinner',
      tableDisplay: 'Dinner Time',
      editable: true,
      options: ['Early in the evening', 'Mid-evening', 'Late in the evening'],
      value: 'Mid-evening'
    },
    'breakfastFreq': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'breakfastFreq',
      display: 'I typically eat breakfast',
      tableDisplay: 'Breakfast Freq.',
      editable: true,
      options: ['Every day', 'Most days', 'On occasion', 'Infrequently', 'Never'],
      value: 'Every day'
    },
    'lunchFreq': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'lunchFreq',
      display: 'I typically eat lunch',
      tableDisplay: 'Lunch Freq.',
      editable: true,
      options: ['Every day', 'Most days', 'On occasion', 'Infrequently', 'Never'],
      value: 'Every day'
    },
    'dinnerFreq': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'dinnerFreq',
      display: 'I typically eat dinner',
      tableDisplay: 'Dinner Freq.',
      editable: true,
      options: ['Every day', 'Most days', 'On occasion', 'Infrequently', 'Never'],
      value: 'Every day'
    },
    'clothing': {
      section: 'Needs',
      id: 'clothing',
      display: 'Describe your clothing preferences',
      value: []
    },
    'haircut': {
      section: 'Needs',
      id: 'haircut',
      display: 'Describe your haircut preferences',
      value: []
    },
    'routines': {
      section: 'Needs',
      id: 'routines',
      display: 'Describe any routines you like to keep',
      editable: true,
      value: ''
    },
    'toothpaste': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'toothpaste',
      display: 'My favourite toothpaste is',
      tableDisplay: 'Toothpaste',
      editable: true,
      value: ''
    },
    'toothbrush': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'toothbrush',
      display: 'My favourite toothbrush is',
      tableDisplay: 'Toothbrush',
      editable: true,
      value: ''
    },
    'floss': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'floss',
      display: 'My favourite floss is',
      tableDisplay: 'Floss',
      editable: true,
      value: ''
    },
    'mouthwasher': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'mouthwasher',
      display: 'My favourite mouthwash is',
      tableDisplay: 'Mouthwash',
      editable: true,
      value: ''
    },
    'dentureSolution': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'dentureSolution',
      display: 'My favourite denture solution is',
      tableDisplay: 'Denture Sol.',
      editable: true,
      value: ''
    },
    'moisturizer': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'moisturizer',
      display: 'My favourite moisturizer is',
      tableDisplay: 'Moisturizer',
      editable: true,
      value: ''
    },
    'facialcleanser': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'facialcleanser',
      display: 'My favourite facial cleanser is',
      tableDisplay: 'Facial Cleanser',
      editable: true,
      value: ''
    },
    'handsoap': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'handsoap',
      display: 'My favourite hand soap is',
      tableDisplay: 'Hand Soap',
      editable: true,
      value: ''
    },
    'bodywash': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'bodywash',
      display: 'My favourite body wash is',
      tableDisplay: 'Body Wash',
      editable: true,
      value: ''
    },
    'shavingcream': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'shavingcream',
      display: 'My favourite shaving cream is',
      tableDisplay: 'Shaving Cream',
      editable: true,
      value: ''
    },
    'deodorant': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'deodorant',
      display: 'My favourite deodorant is',
      tableDisplay: 'Deodorant',
      editable: true,
      value: ''
    },
    'perfume': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'perfume',
      display: 'My favourite perfume/cologne is',
      tableDisplay: 'Perfume/Cologne',
      editable: true,
      value: ''
    },
    'shampoo': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'shampoo',
      display: 'My favourite shampoo is',
      tableDisplay: 'Shampoo',
      editable: true,
      value: ''
    },
    'conditioner': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'conditioner',
      display: 'My favourite conditioner is',
      tableDisplay: 'Conditioner',
      editable: true,
      value: ''
    },
    'hairspray': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'hairspray',
      display: 'My favourite hairspray is',
      tableDisplay: 'Hairspray',
      editable: true,
      value: ''
    },
    'stylingproduct': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'stylingproduct',
      display: 'My favourite styling product is',
      tableDisplay: 'Styling Product',
      editable: true,
      value: ''
    },
    'hairdye': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'hairdye',
      display: 'My favourite hair dye is',
      tableDisplay: 'Hair Dye',
      editable: true,
      value: ''
    },
    'bathingroutine': {
      section: 'Needs',
      subcat: 'Person Care Routines',
      id: 'hairdye',
      display: 'My bathing routine is',
      editable: true,
      value: ''
    },
    'morningroutine': {
      section: 'Needs',
      subcat: 'Person Care Routines',
      id: 'hairdye',
      display: 'My morning routine is',
      editable: true,
      value: ''
    },
    'eveningroutine': {
      section: 'Needs',
      subcat: 'Person Care Routines',
      id: 'hairdye',
      display: 'My evening routine is',
      editable: true,
      value: ''
    },
    'specialoccassionroutine': {
      section: 'Needs',
      subcat: 'Person Care Routines',
      id: 'specialoccassionroutine',
      display: 'My special occassion routine is',
      editable: true,
      value: ''
    },
    'otherroutine': {
      section: 'Needs',
      subcat: 'Person Care Routines',
      id: 'otherroutine',
      display: 'My other routines are',
      editable: true,
      value: ''
    },


    'music': {
      section: 'Preferences',
      id: 'music',
      display: 'What is your favourite song or album?',
      tableDisplay: 'Music',
      editable: true,
      value: ''
    },
    'art': {
      section: 'Preferences',
      id: 'art',
      display: 'What arts and/or culture do you like?',
      editable: true,
      value: ''
    },
    'books': {
      section: 'Preferences',
      id: 'books',
      display: 'What is your favourite book?',
      tableDisplay: 'Book',
      editable: true,
      value: ''
    },
    'hobbies': {
      section: 'Preferences',
      id: 'hobbies',
      display: 'What are your hobbies / past times?',
      editable: true,
      value: ''
    },
    'entertainment': {
      section: 'Preferences',
      id: 'entertainment',
      display: 'What are your entertainment preferences?',
      editable: true,
      value: 'Romantic comedies'
    },
    'friendshipinterests': {
      section: 'Personhood',
      subcat: 'Friendship Criteria',
      id: 'friendshipinterests',
      display: 'My friends need to share my interests and hobbies',
      editable: true,
      value: '',
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'friendshipcultural': {
      section: 'Personhood',
      subcat: 'Friendship Criteria',
      id: 'friendshipcultural',
      display: 'My friends need to share my cultural background',
      editable: true,
      value: '',
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'friendshipbeliefs': {
      section: 'Personhood',
      subcat: 'Friendship Criteria',
      id: 'friendshipbeliefs',
      display: 'My friends need to share my values and beliefs',
      editable: true,
      value: '',
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'friendshipemotional': {
      section: 'Personhood',
      subcat: 'Friendship Criteria',
      id: 'friendshipemotional',
      display: 'My friends need to be emotionally similar to me',
      editable: true,
      value: '',
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'lifeeventbio': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventbio',
      display: 'Think back on the events that effected you as an individual and lead you to be the person you are today',
      editable: true,
      value: ''
    },
    'lifeeventchild': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventchild',
      display: 'What are some important events from your childhood?',
      editable: true,
      value: ''
    },
    'lifeeventyoungadult': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventyoungadult',
      display: 'What are some important event from your young adulthood?',
      editable: true,
      value: ''
    },
    'lifeeventadult': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventadult',
      display: 'What are some important event from your adulthood?',
      editable: true,
      value: ''
    },
    'lifeeventoldage': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventoldage',
      display: 'What are some important event from your old age?',
      editable: true,
      value: ''
    },
    'pastexperiencesoccupation': {
      section: 'Personhood',
      subcat: 'Past Experiences',
      id: 'pastexperiencesoccupation',
      display: 'What are some past experiences from your occupation?',
      editable: true,
      value: ''
    },
    'pastexperienceseducation': {
      section: 'Personhood',
      subcat: 'Past Experiences',
      id: 'pastexperienceseducation',
      display: 'What are some past experiences from your education?',
      editable: true,
      value: ''
    },
    'pastexperiencesvolunteering': {
      section: 'Personhood',
      subcat: 'Past Experiences',
      id: 'pastexperiencesvolunteering',
      display: 'What are some past experiences from your volunteering?',
      editable: true,
      value: ''
    },
    'workties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'workties',
      display: 'Who I am is strongly tied to my work',
      tableDisplay: 'Defined by Work',
      workCloudDisplay: 'Work',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'familyties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'familyties',
      display: 'Who I am is strongly tied to my family',
      tableDisplay: 'Defined by Family',
      workCloudDisplay: 'Family',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'friendties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'friendties',
      display: 'Who I am is strongly tied to my friends and social networks',
      tableDisplay: 'Defined by Friends',
      workCloudDisplay: 'Friends',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'outsideworkties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'outsideworkties',
      display: 'Who I am is strongly tied to what I do outside of work and family (hobbies, activities, volunteering, leisure time, etc.)',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'politicalties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'politicalties',
      display: 'Who I am is strongly tied to my political beliefs',
      tableDisplay: 'Defined by Politics',
      workCloudDisplay: 'Politics',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'religiousties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'religiousties',
      display: 'Who I am is strongly tied to my religious beliefs',
      tableDisplay: 'Defined by Faith',
      workCloudDisplay: 'Faith',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },

    'devtalents': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'devtalents',
      display: 'To fully develop your talents, you need to have a job',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'nowork': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'nowork',
      display: 'It is humiliating to receive money without working for it',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'lazy': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'lazy',
      display: 'People who don’t work become lazy',
      tableDisplay: 'Need to Work',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'duty': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'duty',
      display: 'Work is a duty towards society',
      tableDisplay: 'Communitarian',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'workfirst': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'workfirst',
      display: 'Work should always come first, even if it means less spare time',
      tableDisplay: 'Workaholism',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },

    'leisuretomeet': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisuretomeet',
      display: 'I prefer using leisure time to meet people',
      tableDisplay: 'Social',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'leisuretorelax': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisuretorelax',
      display: 'I prefer using leisure time to relax',
      tableDisplay: 'Downtime',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'leisureunstruc': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisureunstruc',
      display: 'I prefer leisure time that is unstructured',
      tableDisplay: 'Freebird',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    },
    'leisurenew': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisurenew',
      display: 'I prefer using leisure time to learn something new',
      tableDisplay: 'Lifetime Learner',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 4
    }
  });