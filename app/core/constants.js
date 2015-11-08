'use strict';

angular.module('ianmd.constants', [])
  .constant('kAppVersion', 37)
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
    'roomnum': {
      id: 'roomnum',
      display: 'Room #',
      value: '',
    },
    'ohip': {
      id: 'ohip',
      display: 'Room #',
      value: '',
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

    'ethnicFoodOrigin': {
      section: 'Needs',
      id: 'ethnicFoodOrigin',
      display: 'I prefer foods from',
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
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'hotBreakfast': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'hotBreakfast',
      display: 'It is important to me that I have a hot breakfast',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'hotLunch': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'hotLunch',
      display: 'It is important to me that I have a hot lunch',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'hotDinner': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'hotDinner',
      display: 'It is important to me that I have a hot dinner',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'spicyFood': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'spicyFood',
      display: 'I like spicy food',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'sweetFood': {
      section: 'Needs',
      id: 'sweetFood',
      display: 'I like sweet food',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'saltyFood': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'saltyFood',
      display: 'I like salty food',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'unseasonedFood': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'unseasonedFood',
      display: 'I prefer unseasoned or lightly-seasoned food',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'breakfastTime': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'breakfastTime',
      display: 'I prefer to have breakfast',
      editable: true,
      options: ['Early in the morning', 'mid-morning', 'late morning'],
      value: ''
    },
    'lunchTime': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'lunchTime',
      display: 'I prefer to have lunch',
      editable: true,
      options: ['Before noon', 'around noon', 'after noon'],
      value: ''
    },
    'dinnerTime': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'dinnerTime',
      display: 'I prefer to have dinner',
      editable: true,
      options: ['Early in the evening', 'mid-evening', 'late in the evening'],
      value: ''
    },
    'breakfastFreq': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'breakfastFreq',
      display: 'I typically eat breakfast',
      editable: true,
      options: ['Every day', 'most days', 'on occasion', 'infrequently', 'never'],
      value: ''
    },
    'lunchFreq': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'lunchFreq',
      display: 'I typically eat lunch',
      editable: true,
      options: ['Every day', 'most days', 'on occasion', 'infrequently', 'never'],
      value: ''
    },
    'dinnerFreq': {
      section: 'Needs',
      subcat: 'Food Preferences',
      id: 'dinnerFreq',
      display: 'I typically eat dinner',
      editable: true,
      options: ['Every day', 'most days', 'on occasion', 'infrequently', 'never'],
      value: ''
    },
    'clothing': {
      section: 'Needs',
      id: 'clothing',
      display: 'Describe your clothing preferences',
      editable: true,
      photoUploadMax: 3,
      photos: [],
      value: ''
    },
    'haircut': {
      section: 'Needs',
      id: 'haircut',
      display: 'Describe your haircut preferences',
      editable: true,
      photoUploadMax: 1,
      photos: [],
      value: ''
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
      editable: true,
      value: ''
    },
    'toothbrush': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'toothbrush',
      display: 'My favourite toothbrush is',
      editable: true,
      value: ''
    },
    'floss': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'floss',
      display: 'My favourite floss is',
      editable: true,
      value: ''
    },
    'mouthwasher': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'mouthwasher',
      display: 'My favourite mouthwash is',
      editable: true,
      value: ''
    },
    'dentureSolution': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'dentureSolution',
      display: 'My favourite denture solution is',
      editable: true,
      value: ''
    },
    'moisturizer': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'moisturizer',
      display: 'My favourite moisturizer is',
      editable: true,
      value: ''
    },
    'facialcleanser': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'facialcleanser',
      display: 'My favourite facial cleanser is',
      editable: true,
      value: ''
    },
    'handsoap': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'handsoap',
      display: 'My favourite hand soap is',
      editable: true,
      value: ''
    },
    'bodywash': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'bodywash',
      display: 'My favourite body wash is',
      editable: true,
      value: ''
    },
    'shavingcream': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'bodywash',
      display: 'My favourite shaving cream is',
      editable: true,
      value: ''
    },
    'deodorant': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'deodorant',
      display: 'My favourite deodorant is',
      editable: true,
      value: ''
    },
    'perfume': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'perfume',
      display: 'My favourite perfume/cologne is',
      editable: true,
      value: ''
    },
    'shampoo': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'shampoo',
      display: 'My favourite shampoo is',
      editable: true,
      value: ''
    },
    'conditioner': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'conditioner',
      display: 'My favourite conditioner is',
      editable: true,
      value: ''
    },
    'hairspray': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'hairspray',
      display: 'My favourite hairspray is',
      editable: true,
      value: ''
    },
    'stylingproduct': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'stylingproduct',
      display: 'My favourite styling product is',
      editable: true,
      value: ''
    },
    'hairdye': {
      section: 'Needs',
      subcat: 'Grooming',
      id: 'hairdye',
      display: 'My favourite hair dye is',
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
      value: 3
    },
    'friendshipcultural': {
      section: 'Personhood',
      subcat: 'Friendship Criteria',
      id: 'friendshipcultural',
      display: 'My friends need to share my cultural background',
      editable: true,
      value: '',
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'friendshipbeliefs': {
      section: 'Personhood',
      subcat: 'Friendship Criteria',
      id: 'friendshipbeliefs',
      display: 'My friends need to share my values and beliefs',
      editable: true,
      value: '',
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'friendshipemotional': {
      section: 'Personhood',
      subcat: 'Friendship Criteria',
      id: 'friendshipemotional',
      display: 'My friends need to be emotionally similar to me',
      editable: true,
      value: '',
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'lifeeventchild': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventchild',
      display: 'What are some imporant events from your childhood?',
      editable: true,
      value: ''
    },
    'lifeeventyoungadult': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventyoungadult',
      display: 'What are some imporant event from your young adulthood?',
      editable: true,
      value: ''
    },
    'lifeeventadult': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventadult',
      display: 'What are some imporant event from your adulthood?',
      editable: true,
      value: ''
    },
    'lifeeventoldage': {
      section: 'Personhood',
      subcat: 'Important life events',
      id: 'lifeeventoldage',
      display: 'What are some imporant event from your old age?',
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
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'familyties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'familyties',
      display: 'Who I am is strongly tied to my family',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'friendties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'friendties',
      display: 'Who I am is strongly tied to my friends and social networks',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'outsideworkties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'outsideworkties',
      display: 'Who I am is strongly tied to what I do outside of work and family (hobbies, activities, volunteering, leisure time, etc.)',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'politicalties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'politicalties',
      display: 'Who I am is strongly tied to my political beliefs',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'religiousties': {
      section: 'Personhood',
      subcat: 'Personal Values - Factors influencing who I am',
      id: 'religiousties',
      display: 'Who I am is strongly tied to my religious beliefs',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },

    'devtalents': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'devtalents',
      display: 'To fully develop your talents, you need to have a job',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'nowork': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'nowork',
      display: 'It is humiliating to receive money without working for it',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'lazy': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'lazy',
      display: 'People who don’t work become lazy',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'duty': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'duty',
      display: 'Work is a duty towards society',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'workfirst': {
      section: 'Personhood',
      subcat: 'Personal Values - Work',
      id: 'workfirst',
      display: 'Work should always come first, even if it means less spare time',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },

    'leisuretomeet': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisuretomeet',
      display: 'I prefer using leisure time to meet people',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'leisuretorelax': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisuretorelax',
      display: 'I prefer using leisure time to relax',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'leisureunstruc': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisureunstruc',
      display: 'I prefer leisure time that is unstructured',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    },
    'leisurenew': {
      section: 'Personhood',
      subcat: 'Personal Values - Leisure',
      id: 'leisurenew',
      display: 'I prefer using leisure time to learn something new',
      editable: true,
      options: [1,2,3,4,5,6,7],
      value: 3
    }
  })
  .constant('kSanaMarina', {  
     "id":{  
        "id":"id",
        "display":"User Id",
        "value":"sana.marina"
     },
     "roomnum":{  
        "id":"roomnum",
        "display":"Room #",
        "value":"31A"
     },
     "ohip":{  
        "id":"ohip",
        "display":"Room #",
        "value":"2343-222-999 KP"
     },
     "facility":{  
        "id":"facility",
        "display":"Facility",
        "value":[  
           "5193366551"
        ]
     },
     "lastUpdated":{  
        "id":"lastUpdated",
        "display":"Last Updated",
        "value":1446950735
     },
     "firstname":{  
        "id":"firstname",
        "display":"First Name",
        "value":"Sana"
     },
     "lastname":{  
        "id":"lastname",
        "display":"Last Name",
        "value":"Marina"
     },
     "ethnicFoodOrigin":{  
        "section":"Needs",
        "id":"ethnicFoodOrigin",
        "display":"I prefer foods from",
        "editable":true,
        "options":[  
           "South America",
           "Western Europe",
           "Eastern Europe",
           "Middle East",
           "West Africa",
           "South Africa",
           "Southeast Asia",
           "China",
           "Polynesia"
        ],
        "value":"South America"
     },
     "healthyFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"healthyFood",
        "display":"It is important to me that the food I eat is healthy",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "hotBreakfast":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"hotBreakfast",
        "display":"It is important to me that I have a hot breakfast",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "hotLunch":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"hotLunch",
        "display":"It is important to me that I have a hot lunch",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "hotDinner":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"hotDinner",
        "display":"It is important to me that I have a hot dinner",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "spicyFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"spicyFood",
        "display":"I like spicy food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "sweetFood":{  
        "section":"Needs",
        "id":"sweetFood",
        "display":"I like sweet food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "saltyFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"saltyFood",
        "display":"I like salty food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "unseasonedFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"unseasonedFood",
        "display":"I prefer unseasoned or lightly-seasoned food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "breakfastTime":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"breakfastTime",
        "display":"I prefer to have breakfast",
        "editable":true,
        "options":[  
           "Early in the morning",
           "mid-morning",
           "late morning"
        ],
        "value":"late morning"
     },
     "lunchTime":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"lunchTime",
        "display":"I prefer to have lunch",
        "editable":true,
        "options":[  
           "Before noon",
           "around noon",
           "after noon"
        ],
        "value":"around noon"
     },
     "dinnerTime":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"dinnerTime",
        "display":"I prefer to have dinner",
        "editable":true,
        "options":[  
           "Early in the evening",
           "mid-evening",
           "late in the evening"
        ],
        "value":"late in the evening"
     },
     "breakfastFreq":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"breakfastFreq",
        "display":"I typically eat breakfast",
        "editable":true,
        "options":[  
           "Every day",
           "most days",
           "on occasion",
           "infrequently",
           "never"
        ],
        "value":"most days"
     },
     "lunchFreq":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"lunchFreq",
        "display":"I typically eat lunch",
        "editable":true,
        "options":[  
           "Every day",
           "most days",
           "on occasion",
           "infrequently",
           "never"
        ],
        "value":"Every day"
     },
     "dinnerFreq":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"dinnerFreq",
        "display":"I typically eat dinner",
        "editable":true,
        "options":[  
           "Every day",
           "most days",
           "on occasion",
           "infrequently",
           "never"
        ],
        "value":"Every day"
     },
     "clothing":{  
        "section":"Needs",
        "id":"clothing",
        "display":"Describe your clothing preferences",
        "editable":true,
        "photoUploadMax":3,
        "photos":[  

        ],
        "value":"They reflect my personal style, and are suitable at cocktail parties as well as intimate events - https://upload.wikimedia.org/wikipedia/commons/f/f2/Normatalmadge_crop.jpg, https://upload.wikimedia.org/wikipedia/commons/8/82/Louise_Brooks_ggbain_32453u_crop.jpg, https://upload.wikimedia.org/wikipedia/commons/d/d2/Joancrawford3.jpg"
     },
     "haircut":{  
        "section":"Needs",
        "id":"haircut",
        "display":"Describe your haircut preferences",
        "editable":true,
        "photoUploadMax":1,
        "photos":[  

        ],
        "value":"It's out of my face but still looks elegant. - https://c1.staticflickr.com/9/8234/8540085135_4fd7342d28_z.jpg"
     },
     "routines":{  
        "section":"Needs",
        "id":"routines",
        "display":"Describe any routines you like to keep",
        "editable":true,
        "value":"I always sit down to digest after lunch or dinner, because they make me tired. I always like to write a letter to my grandchildren after lunch, although sometimes I can't remember."
     },
     "toothpaste":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"toothpaste",
        "display":"My favourite toothpaste is",
        "editable":true,
        "value":""
     },
     "toothbrush":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"toothbrush",
        "display":"My favourite toothbrush is",
        "editable":true,
        "value":""
     },
     "floss":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"floss",
        "display":"My favourite floss is",
        "editable":true,
        "value":""
     },
     "mouthwasher":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"mouthwasher",
        "display":"My favourite mouthwash is",
        "editable":true,
        "value":""
     },
     "dentureSolution":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"dentureSolution",
        "display":"My favourite denture solution is",
        "editable":true,
        "value":"Polident"
     },
     "moisturizer":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"moisturizer",
        "display":"My favourite moisturizer is",
        "editable":true,
        "value":""
     },
     "facialcleanser":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"facialcleanser",
        "display":"My favourite facial cleanser is",
        "editable":true,
        "value":""
     },
     "handsoap":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"handsoap",
        "display":"My favourite hand soap is",
        "editable":true,
        "value":""
     },
     "bodywash":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"bodywash",
        "display":"My favourite body wash is",
        "editable":true,
        "value":""
     },
     "shavingcream":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"bodywash",
        "display":"My favourite shaving cream is",
        "editable":true,
        "value":""
     },
     "deodorant":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"deodorant",
        "display":"My favourite deodorant is",
        "editable":true,
        "value":""
     },
     "perfume":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"perfume",
        "display":"My favourite perfume/cologne is",
        "editable":true,
        "value":"Chanel No. 5"
     },
     "shampoo":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"shampoo",
        "display":"My favourite shampoo is",
        "editable":true,
        "value":"Pantene"
     },
     "conditioner":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"conditioner",
        "display":"My favourite conditioner is",
        "editable":true,
        "value":""
     },
     "hairspray":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"hairspray",
        "display":"My favourite hairspray is",
        "editable":true,
        "value":"Pantene"
     },
     "stylingproduct":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"stylingproduct",
        "display":"My favourite styling product is",
        "editable":true,
        "value":""
     },
     "hairdye":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"hairdye",
        "display":"My favourite hair dye is",
        "editable":true,
        "value":""
     },
     "bathingroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"hairdye",
        "display":"My bathing routine is",
        "editable":true,
        "value":"I never leave the house without my lipstick on"
     },
     "morningroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"hairdye",
        "display":"My morning routine is",
        "editable":true,
        "value":""
     },
     "eveningroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"hairdye",
        "display":"My evening routine is",
        "editable":true,
        "value":""
     },
     "specialoccassionroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"specialoccassionroutine",
        "display":"My special occassion routine is",
        "editable":true,
        "value":""
     },
     "otherroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"otherroutine",
        "display":"My other routines are",
        "editable":true,
        "value":""
     },
     "music":{  
        "section":"Preferences",
        "id":"music",
        "display":"What is your favourite song or album?",
        "editable":true,
        "value":"Debussy"
     },
     "art":{  
        "section":"Preferences",
        "id":"art",
        "display":"What arts and/or culture do you like?",
        "editable":true,
        "value":"I adore the Impressionists. I love the Opera, and musicals."
     },
     "books":{  
        "section":"Preferences",
        "id":"books",
        "display":"What is your favourite book?",
        "editable":true,
        "value":"The Great Gatsby by F. Scott Fitzgerald"
     },
     "hobbies":{  
        "section":"Preferences",
        "id":"hobbies",
        "display":"What are your hobbies / past times?",
        "editable":true,
        "value":"I like to knit, and to paint."
     },
     "entertainment":{  
        "section":"Preferences",
        "id":"entertainment",
        "display":"What are your entertainment preferences?",
        "editable":true,
        "value":"I like to watch musicals. Sports are a bore."
     },
     "friendshipinterests":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipinterests",
        "display":"My friends need to share my interests and hobbies",
        "editable":true,
        "value":4,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "friendshipcultural":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipcultural",
        "display":"My friends need to share my cultural background",
        "editable":true,
        "value":4,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "friendshipbeliefs":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipbeliefs",
        "display":"My friends need to share my values and beliefs",
        "editable":true,
        "value":7,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "friendshipemotional":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipemotional",
        "display":"My friends need to be emotionally similar to me",
        "editable":true,
        "value":2,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "lifeeventchild":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventchild",
        "display":"What are some imporant events from your childhood?",
        "editable":true,
        "value":"I lived on a farm, and loved to ride horses."
     },
     "lifeeventyoungadult":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventyoungadult",
        "display":"What are some imporant event from your young adulthood?",
        "editable":true,
        "value":"I married, and had two children."
     },
     "lifeeventadult":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventadult",
        "display":"What are some imporant event from your adulthood?",
        "editable":true,
        "value":"I spent most of my days volunteering at the church and fundraising for charities."
     },
     "lifeeventoldage":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventoldage",
        "display":"What are some imporant event from your old age?",
        "editable":true,
        "value":"After my husband passed I spent summers at the house with my grandchildren, and winters down in Florida with my sister."
     },
     "pastexperiencesoccupation":{  
        "section":"Personhood",
        "subcat":"Past Experiences",
        "id":"pastexperiencesoccupation",
        "display":"What are some past experiences from your occupation?",
        "editable":true,
        "value":""
     },
     "pastexperienceseducation":{  
        "section":"Personhood",
        "subcat":"Past Experiences",
        "id":"pastexperienceseducation",
        "display":"What are some past experiences from your education?",
        "editable":true,
        "value":"High school"
     },
     "pastexperiencesvolunteering":{  
        "section":"Personhood",
        "subcat":"Past Experiences",
        "id":"pastexperiencesvolunteering",
        "display":"What are some past experiences from your volunteering?",
        "editable":true,
        "value":"At the church"
     },
     "workties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"workties",
        "display":"Who I am is strongly tied to my work",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "familyties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"familyties",
        "display":"Who I am is strongly tied to my family",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "friendties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"friendties",
        "display":"Who I am is strongly tied to my friends and social networks",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "outsideworkties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"outsideworkties",
        "display":"Who I am is strongly tied to what I do outside of work and family (hobbies, activities, volunteering, leisure time, etc.)",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "politicalties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"politicalties",
        "display":"Who I am is strongly tied to my political beliefs",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "religiousties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"religiousties",
        "display":"Who I am is strongly tied to my religious beliefs",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":7
     },
     "devtalents":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"devtalents",
        "display":"To fully develop your talents, you need to have a job",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":2
     },
     "nowork":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"nowork",
        "display":"It is humiliating to receive money without working for it",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":2
     },
     "lazy":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"lazy",
        "display":"People who don’t work become lazy",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "duty":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"duty",
        "display":"Work is a duty towards society",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "workfirst":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"workfirst",
        "display":"Work should always come first, even if it means less spare time",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "leisuretomeet":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisuretomeet",
        "display":"I prefer using leisure time to meet people",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":7
     },
     "leisuretorelax":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisuretorelax",
        "display":"I prefer using leisure time to relax",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "leisureunstruc":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisureunstruc",
        "display":"I prefer leisure time that is unstructured",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "leisurenew":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisurenew",
        "display":"I prefer using leisure time to learn something new",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     }
  })
  .constant('kVickiChan', {  
     "id":{  
        "id":"id",
        "display":"User Id",
        "value":"vicki.chan"
     },
     "roomnum":{  
        "id":"roomnum",
        "display":"Room #",
        "value":"5B"
     },
     "ohip":{  
        "id":"ohip",
        "display":"Room #",
        "value":"3434-777-888 KP"
     },
     "facility":{  
        "id":"facility",
        "display":"Facility",
        "value":[  
           "5193366551"
        ]
     },
     "lastUpdated":{  
        "id":"lastUpdated",
        "display":"Last Updated",
        "value":1446951031
     },
     "firstname":{  
        "id":"firstname",
        "display":"First Name",
        "value":"Vicki"
     },
     "lastname":{  
        "id":"lastname",
        "display":"Last Name",
        "value":"Chan"
     },
     "ethnicFoodOrigin":{  
        "section":"Needs",
        "id":"ethnicFoodOrigin",
        "display":"I prefer foods from",
        "editable":true,
        "options":[  
           "South America",
           "Western Europe",
           "Eastern Europe",
           "Middle East",
           "West Africa",
           "South Africa",
           "Southeast Asia",
           "China",
           "Polynesia"
        ],
        "value":"China"
     },
     "healthyFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"healthyFood",
        "display":"It is important to me that the food I eat is healthy",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":7
     },
     "hotBreakfast":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"hotBreakfast",
        "display":"It is important to me that I have a hot breakfast",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "hotLunch":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"hotLunch",
        "display":"It is important to me that I have a hot lunch",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":7
     },
     "hotDinner":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"hotDinner",
        "display":"It is important to me that I have a hot dinner",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":7
     },
     "spicyFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"spicyFood",
        "display":"I like spicy food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "sweetFood":{  
        "section":"Needs",
        "id":"sweetFood",
        "display":"I like sweet food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "saltyFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"saltyFood",
        "display":"I like salty food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "unseasonedFood":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"unseasonedFood",
        "display":"I prefer unseasoned or lightly-seasoned food",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "breakfastTime":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"breakfastTime",
        "display":"I prefer to have breakfast",
        "editable":true,
        "options":[  
           "Early in the morning",
           "mid-morning",
           "late morning"
        ],
        "value":"mid-morning"
     },
     "lunchTime":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"lunchTime",
        "display":"I prefer to have lunch",
        "editable":true,
        "options":[  
           "Before noon",
           "around noon",
           "after noon"
        ],
        "value":"after noon"
     },
     "dinnerTime":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"dinnerTime",
        "display":"I prefer to have dinner",
        "editable":true,
        "options":[  
           "Early in the evening",
           "mid-evening",
           "late in the evening"
        ],
        "value":"Early in the evening"
     },
     "breakfastFreq":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"breakfastFreq",
        "display":"I typically eat breakfast",
        "editable":true,
        "options":[  
           "Every day",
           "most days",
           "on occasion",
           "infrequently",
           "never"
        ],
        "value":"Every day"
     },
     "lunchFreq":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"lunchFreq",
        "display":"I typically eat lunch",
        "editable":true,
        "options":[  
           "Every day",
           "most days",
           "on occasion",
           "infrequently",
           "never"
        ],
        "value":"Every day"
     },
     "dinnerFreq":{  
        "section":"Needs",
        "subcat":"Food Preferences",
        "id":"dinnerFreq",
        "display":"I typically eat dinner",
        "editable":true,
        "options":[  
           "Every day",
           "most days",
           "on occasion",
           "infrequently",
           "never"
        ],
        "value":"Every day"
     },
     "clothing":{  
        "section":"Needs",
        "id":"clothing",
        "display":"Describe your clothing preferences",
        "editable":true,
        "photoUploadMax":3,
        "photos":[  

        ],
        "value":"Simple and comfortable - http://www.google.ca/imgres?imgurl=http://bmodish.com/wp-content/uploads/2013/03/Casual-Fall-outfits.jpg&imgrefurl=http://bmodish.com/23-stylish-outfit-that-are-perfect-for-early-fall-outfits&h=481&w=550&tbnid=XmbzF0fG4gQJsM:&docid=7IDnqU_Dp37ilM&ei=v5w-VqGzOIrQetzHnYgC&tbm=isch&ved=0CDcQMygGMAZqFQoTCOGOvprO_8gCFQqoHgod3GMHIQ"
     },
     "haircut":{  
        "section":"Needs",
        "id":"haircut",
        "display":"Describe your haircut preferences",
        "editable":true,
        "photoUploadMax":1,
        "photos":[  

        ],
        "value":"Short and easy to clean - http://www.google.ca/imgres?imgurl=http://i630.photobucket.com/albums/uu26/dramabeans/drama/2010/gumiho16/gumiho16-00150.jpg&imgrefurl=http://www.dramabeans.com/2010/09/my-girfriend-is-a-gumiho-episode-16-final/&h=450&w=800&tbnid=d70dzYZndfGY5M:&docid=G8-uVH_ed6y86M&ei=GJ4-VrzABMutePSyitAP&tbm=isch&ved=0CB4QMygDMANqFQoTCLysy77P_8gCFcsWHgoddJkC-g"
     },
     "routines":{  
        "section":"Needs",
        "id":"routines",
        "display":"Describe any routines you like to keep",
        "editable":true,
        "value":"Lunch with family every Sunday"
     },
     "toothpaste":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"toothpaste",
        "display":"My favourite toothpaste is",
        "editable":true,
        "value":""
     },
     "toothbrush":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"toothbrush",
        "display":"My favourite toothbrush is",
        "editable":true,
        "value":""
     },
     "floss":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"floss",
        "display":"My favourite floss is",
        "editable":true,
        "value":"Johnston & Johnston"
     },
     "mouthwasher":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"mouthwasher",
        "display":"My favourite mouthwash is",
        "editable":true,
        "value":""
     },
     "dentureSolution":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"dentureSolution",
        "display":"My favourite denture solution is",
        "editable":true,
        "value":""
     },
     "moisturizer":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"moisturizer",
        "display":"My favourite moisturizer is",
        "editable":true,
        "value":""
     },
     "facialcleanser":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"facialcleanser",
        "display":"My favourite facial cleanser is",
        "editable":true,
        "value":"Neutrogena"
     },
     "handsoap":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"handsoap",
        "display":"My favourite hand soap is",
        "editable":true,
        "value":""
     },
     "bodywash":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"bodywash",
        "display":"My favourite body wash is",
        "editable":true,
        "value":""
     },
     "shavingcream":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"bodywash",
        "display":"My favourite shaving cream is",
        "editable":true,
        "value":""
     },
     "deodorant":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"deodorant",
        "display":"My favourite deodorant is",
        "editable":true,
        "value":""
     },
     "perfume":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"perfume",
        "display":"My favourite perfume/cologne is",
        "editable":true,
        "value":""
     },
     "shampoo":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"shampoo",
        "display":"My favourite shampoo is",
        "editable":true,
        "value":"Dove 2 in 1 Shampoo and Conditioner"
     },
     "conditioner":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"conditioner",
        "display":"My favourite conditioner is",
        "editable":true,
        "value":""
     },
     "hairspray":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"hairspray",
        "display":"My favourite hairspray is",
        "editable":true,
        "value":""
     },
     "stylingproduct":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"stylingproduct",
        "display":"My favourite styling product is",
        "editable":true,
        "value":""
     },
     "hairdye":{  
        "section":"Needs",
        "subcat":"Grooming",
        "id":"hairdye",
        "display":"My favourite hair dye is",
        "editable":true,
        "value":""
     },
     "bathingroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"hairdye",
        "display":"My bathing routine is",
        "editable":true,
        "value":"Shower first thing in the morning"
     },
     "morningroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"hairdye",
        "display":"My morning routine is",
        "editable":true,
        "value":""
     },
     "eveningroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"hairdye",
        "display":"My evening routine is",
        "editable":true,
        "value":""
     },
     "specialoccassionroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"specialoccassionroutine",
        "display":"My special occassion routine is",
        "editable":true,
        "value":""
     },
     "otherroutine":{  
        "section":"Needs",
        "subcat":"Person Care Routines",
        "id":"otherroutine",
        "display":"My other routines are",
        "editable":true,
        "value":""
     },
     "music":{  
        "section":"Preferences",
        "id":"music",
        "display":"What is your favourite song or album?",
        "editable":true,
        "value":"ABBA"
     },
     "art":{  
        "section":"Preferences",
        "id":"art",
        "display":"What arts and/or culture do you like?",
        "editable":true,
        "value":"Korean Soap Operas"
     },
     "books":{  
        "section":"Preferences",
        "id":"books",
        "display":"What is your favourite book?",
        "editable":true,
        "value":""
     },
     "hobbies":{  
        "section":"Preferences",
        "id":"hobbies",
        "display":"What are your hobbies / past times?",
        "editable":true,
        "value":"Mahjong"
     },
     "entertainment":{  
        "section":"Preferences",
        "id":"entertainment",
        "display":"What are your entertainment preferences?",
        "editable":true,
        "value":"Line Dancing"
     },
     "friendshipinterests":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipinterests",
        "display":"My friends need to share my interests and hobbies",
        "editable":true,
        "value":6,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "friendshipcultural":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipcultural",
        "display":"My friends need to share my cultural background",
        "editable":true,
        "value":2,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "friendshipbeliefs":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipbeliefs",
        "display":"My friends need to share my values and beliefs",
        "editable":true,
        "value":4,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "friendshipemotional":{  
        "section":"Personhood",
        "subcat":"Friendship Criteria",
        "id":"friendshipemotional",
        "display":"My friends need to be emotionally similar to me",
        "editable":true,
        "value":5,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ]
     },
     "lifeeventchild":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventchild",
        "display":"What are some imporant events from your childhood?",
        "editable":true,
        "value":"Lived in HK in an apartment"
     },
     "lifeeventyoungadult":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventyoungadult",
        "display":"What are some imporant event from your young adulthood?",
        "editable":true,
        "value":"Immigrated to Toronto"
     },
     "lifeeventadult":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventadult",
        "display":"What are some imporant event from your adulthood?",
        "editable":true,
        "value":"Got married and had a daughter, became a stay at home mom, fundraised a lot for charity"
     },
     "lifeeventoldage":{  
        "section":"Personhood",
        "subcat":"Important life events",
        "id":"lifeeventoldage",
        "display":"What are some imporant event from your old age?",
        "editable":true,
        "value":"Continued participating in the Chinese community and the daughter takes care of her"
     },
     "pastexperiencesoccupation":{  
        "section":"Personhood",
        "subcat":"Past Experiences",
        "id":"pastexperiencesoccupation",
        "display":"What are some past experiences from your occupation?",
        "editable":true,
        "value":"Stay at home mom"
     },
     "pastexperienceseducation":{  
        "section":"Personhood",
        "subcat":"Past Experiences",
        "id":"pastexperienceseducation",
        "display":"What are some past experiences from your education?",
        "editable":true,
        "value":"Chemical Engineer"
     },
     "pastexperiencesvolunteering":{  
        "section":"Personhood",
        "subcat":"Past Experiences",
        "id":"pastexperiencesvolunteering",
        "display":"What are some past experiences from your volunteering?",
        "editable":true,
        "value":"Fundraising for charity"
     },
     "workties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"workties",
        "display":"Who I am is strongly tied to my work",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "familyties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"familyties",
        "display":"Who I am is strongly tied to my family",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":7
     },
     "friendties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"friendties",
        "display":"Who I am is strongly tied to my friends and social networks",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "outsideworkties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"outsideworkties",
        "display":"Who I am is strongly tied to what I do outside of work and family (hobbies, activities, volunteering, leisure time, etc.)",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "politicalties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"politicalties",
        "display":"Who I am is strongly tied to my political beliefs",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":1
     },
     "religiousties":{  
        "section":"Personhood",
        "subcat":"Personal Values - Factors influencing who I am",
        "id":"religiousties",
        "display":"Who I am is strongly tied to my religious beliefs",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "devtalents":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"devtalents",
        "display":"To fully develop your talents, you need to have a job",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "nowork":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"nowork",
        "display":"It is humiliating to receive money without working for it",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     },
     "lazy":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"lazy",
        "display":"People who don’t work become lazy",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":2
     },
     "duty":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"duty",
        "display":"Work is a duty towards society",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":6
     },
     "workfirst":{  
        "section":"Personhood",
        "subcat":"Personal Values - Work",
        "id":"workfirst",
        "display":"Work should always come first, even if it means less spare time",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "leisuretomeet":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisuretomeet",
        "display":"I prefer using leisure time to meet people",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":5
     },
     "leisuretorelax":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisuretorelax",
        "display":"I prefer using leisure time to relax",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":7
     },
     "leisureunstruc":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisureunstruc",
        "display":"I prefer leisure time that is unstructured",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":3
     },
     "leisurenew":{  
        "section":"Personhood",
        "subcat":"Personal Values - Leisure",
        "id":"leisurenew",
        "display":"I prefer using leisure time to learn something new",
        "editable":true,
        "options":[  
           1,
           2,
           3,
           4,
           5,
           6,
           7
        ],
        "value":4
     }
  });