'use strict';

angular.module('ianmd.core.patient.data', [])
  .factory('patientData', function(kPatientInputFields, $localStorage, kAppVersion, userService){
    var currentPatientId = null;
    var patientData = {};

    /* This is where we initiatize fake patient data.  This was so tedious */
    if (!$localStorage.patientData || $localStorage.patientData.version !== kAppVersion) {
      patientData['sana.marina'] =  R.clone(kPatientInputFields);
      patientData['sana.marina'].id.value = 'sana.marina';
      patientData['sana.marina'].roomnum.value = '31A';
      patientData['sana.marina'].ohip.value = "2343-222-999 KP";
      patientData['sana.marina'].facility.value = ['5193366551'];
      patientData['sana.marina'].lastUpdated.value = 1446950735;
      patientData['sana.marina'].firstname.value = 'Sana';
      patientData['sana.marina'].lastname.value = 'Marina';
      patientData['sana.marina'].ethnicFoodOrigin.value = 'South America';
      patientData['sana.marina'].healthyFood.value = 5;
      patientData['sana.marina'].hotBreakfast.value = 4;
      patientData['sana.marina'].hotLunch.value = 4;
      patientData['sana.marina'].hotDinner.value = 5;
      patientData['sana.marina'].spicyFood.value = 3;
      patientData['sana.marina'].sweetFood.value = 3;
      patientData['sana.marina'].saltyFood.value = 6;
      patientData['sana.marina'].unseasonedFood.value = 3;
      patientData['sana.marina'].breakfastTime.value = 'Late morning';
      patientData['sana.marina'].lunchTime.value = 'Around noon';
      patientData['sana.marina'].dinnerTime.value = 'Late in the evening';
      patientData['sana.marina'].breakfastFreq.value = 'Most days';
      patientData['sana.marina'].lunchFreq.value = 'Every day';
      patientData['sana.marina'].dinnerFreq.value = 'Every day';
      patientData['sana.marina'].clothing.value = 'They reflect my personal style, and are suitable at cocktail parties as well as intimate events - https://upload.wikimedia.org/wikipedia/commons/f/f2/Normatalmadge_crop.jpg, https://upload.wikimedia.org/wikipedia/commons/8/82/Louise_Brooks_ggbain_32453u_crop.jpg, https://upload.wikimedia.org/wikipedia/commons/d/d2/Joancrawford3.jpg';
      patientData['sana.marina'].haircut.value = "It's out of my face but still looks elegant. - https://c1.staticflickr.com/9/8234/8540085135_4fd7342d28_z.jpg";
      patientData['sana.marina'].routines.value = "I always sit down to digest after lunch or dinner, because they make me tired. I always like to write a letter to my grandchildren after lunch, although sometimes I can't remember.";
      patientData['sana.marina'].dentureSolution.value = 'Polident';
      patientData['sana.marina'].perfume.value = 'Chanel No. 5';
      patientData['sana.marina'].shampoo.value = 'Pantene';
      patientData['sana.marina'].hairspray.value = 'Pantene';
      patientData['sana.marina'].bathingroutine.value = "I never leave the house without my lipstick on";
      patientData['sana.marina'].hairspray.value = 'Pantene';
      patientData['sana.marina'].music.value = 'Debussy';
      patientData['sana.marina'].art.value = 'I adore the Impressionists. I love the Opera, and musicals.';
      patientData['sana.marina'].books.value = 'The Great Gatsby by F. Scott Fitzgerald';
      patientData['sana.marina'].hobbies.value = 'I like to knit, and to paint.';
      patientData['sana.marina'].entertainment.value = 'I like to watch musicals. Sports are a bore.';
      patientData['sana.marina'].friendshipinterests.value = 4;
      patientData['sana.marina'].friendshipcultural.value = 4;
      patientData['sana.marina'].friendshipbeliefs.value = 7;
      patientData['sana.marina'].friendshipinterests.value = 4;
      patientData['sana.marina'].friendshipemotional.value = 2;
      patientData['sana.marina'].lifeeventchild.value = 'I lived on a farm, and loved to ride horses.';
      patientData['sana.marina'].lifeeventyoungadult.value = 'I am married, and had two children.';
      patientData['sana.marina'].lifeeventadult.value = 'I spent most of my days volunteering at the church and fundraising for charities.';
      patientData['sana.marina'].lifeeventoldage.value = 'After my husband passed I spent summers at the house with my grandchildren, and winters down in Florida with my sister.';
      patientData['sana.marina'].pastexperienceseducation.value = "High school";
      patientData['sana.marina'].pastexperiencesvolunteering.value = "At the church";
      patientData['sana.marina'].workties.value = 4;
      patientData['sana.marina'].familyties.value = 6;
      patientData['sana.marina'].friendties.value = 6;
      patientData['sana.marina'].outsideworkties.value = 6;
      patientData['sana.marina'].politicalties.value = 4;
      patientData['sana.marina'].religiousties.value = 7;
      patientData['sana.marina'].devtalents.value = 2;
      patientData['sana.marina'].nowork.value = 2;
      patientData['sana.marina'].lazy.value = 5;
      patientData['sana.marina'].duty.value = 6;
      patientData['sana.marina'].workfirst.value = 4;
      patientData['sana.marina'].leisuretomeet.value = 7;
      patientData['sana.marina'].leisuretorelax.value = 5;
      patientData['sana.marina'].leisureunstruc.value = 6;
      patientData['sana.marina'].leisurenew.value = 4;
      patientData['sana.marina'].profilepic.value = 'assets/images/sana_marina.jpg';

       patientData['vicki.chan'] =  R.clone(kPatientInputFields);
       patientData['vicki.chan'].id.value = 'vicki.chan';
       patientData['vicki.chan'].roomnum.value = '5B';
       patientData['vicki.chan'].ohip.value = '3434-777-888 KP';
       patientData['vicki.chan'].facility.value = ['5193366551', '4162223211'];
       patientData['vicki.chan'].lastUpdated.value = 1446951031;
       patientData['vicki.chan'].firstname.value = 'Vicki';
       patientData['vicki.chan'].lastname.value = 'Chan';
       patientData['vicki.chan'].ethnicFoodOrigin.value = 'China';
       patientData['vicki.chan'].healthyFood.value = 7;
       patientData['vicki.chan'].hotBreakfast.value = 5;
       patientData['vicki.chan'].hotLunch.value = 7;
       patientData['vicki.chan'].hotDinner.value = 7;
       patientData['vicki.chan'].spicyFood.value = 3;
       patientData['vicki.chan'].sweetFood.value = 3;
       patientData['vicki.chan'].saltyFood.value = 3;
       patientData['vicki.chan'].unseasonedFood.value = 5;
       patientData['vicki.chan'].breakfastTime.value = 'Mid-morning';
       patientData['vicki.chan'].lunchTime.value = 'After noon';
       patientData['vicki.chan'].dinnerTime.value = 'Early in the evening';
       patientData['vicki.chan'].breakfastFreq.value = 'Every day';
       patientData['vicki.chan'].lunchFreq.value = 'Every day';
       patientData['vicki.chan'].dinnerFreq.value = 'Every day';
       patientData['vicki.chan'].clothing.value = 'Simple and comfortable - http://www.google.ca/imgres?imgurl=http://bmodish.com/wp-content/uploads/20…-VqGzOIrQetzHnYgC&tbm=isch&ved=0CDcQMygGMAZqFQoTCOGOvprO_8gCFQqoHgod3GMHIQ';
       patientData['vicki.chan'].haircut.value = 'Short and easy to clean - http://www.google.ca/imgres?imgurl=http://i630.photobucket.com/albums/uu26/…-VrzABMutePSyitAP&tbm=isch&ved=0CB4QMygDMANqFQoTCLysy77P_8gCFcsWHgoddJkC-g';
       patientData['vicki.chan'].routines.value = 'Lunch with family every Sunday';
       patientData['vicki.chan'].toothpaste.value = '';
       patientData['vicki.chan'].toothbrush.value = '';
       patientData['vicki.chan'].floss.value = 'Johnston & Johnston';
       patientData['vicki.chan'].mouthwasher.value = '';
       patientData['vicki.chan'].dentureSolution.value = '';
       patientData['vicki.chan'].moisturizer.value = '';
       patientData['vicki.chan'].facialcleanser.value = 'Neutrogena';
       patientData['vicki.chan'].handsoap.value = '';
       patientData['vicki.chan'].bodywash.value = '';
       patientData['vicki.chan'].shavingcream.value = '';
       patientData['vicki.chan'].deodorant.value = '';
       patientData['vicki.chan'].perfume.value = '';
       patientData['vicki.chan'].shampoo.value = 'Dove 2 in 1 Shampoo and Conditioner';
       patientData['vicki.chan'].conditioner.value = '';
       patientData['vicki.chan'].hairspray.value = '';
       patientData['vicki.chan'].stylingproduct.value = '';
       patientData['vicki.chan'].hairdye.value = '';
       patientData['vicki.chan'].bathingroutine.value = 'Shower first thing in the morning';
       patientData['vicki.chan'].morningroutine.value = '';
       patientData['vicki.chan'].eveningroutine.value = '';
       patientData['vicki.chan'].specialoccassionroutine.value = '';
       patientData['vicki.chan'].otherroutine.value = '';
       patientData['vicki.chan'].music.value = 'ABBA';
       patientData['vicki.chan'].art.value = 'Korean Soap Operas';
       patientData['vicki.chan'].books.value = '';
       patientData['vicki.chan'].hobbies.value = 'Mahjong';
       patientData['vicki.chan'].entertainment.value = 'Line Dancing';
       patientData['vicki.chan'].friendshipinterests.value = 6;
       patientData['vicki.chan'].friendshipcultural.value = 2;
       patientData['vicki.chan'].friendshipbeliefs.value = 4;
       patientData['vicki.chan'].friendshipemotional.value = 5;
       patientData['vicki.chan'].lifeeventchild.value = 'Lived in HK in an apartment';
       patientData['vicki.chan'].lifeeventyoungadult.value = 'Immigrated to Toronto';
       patientData['vicki.chan'].lifeeventadult.value = 'Got married and had a daughter, became a stay at home mom, fundraised a lot for charity';
       patientData['vicki.chan'].lifeeventoldage.value = 'Continued participating in the Chinese community and the daughter takes care of her';
       patientData['vicki.chan'].pastexperiencesoccupation.value = 'Stay at home mom';
       patientData['vicki.chan'].pastexperienceseducation.value = 'Chemical Engineer';
       patientData['vicki.chan'].pastexperiencesvolunteering.value = 'Fundraising for charity';
       patientData['vicki.chan'].workties.value = 6;
       patientData['vicki.chan'].familyties.value = 7;
       patientData['vicki.chan'].friendties.value = 5;
       patientData['vicki.chan'].outsideworkties.value = 4;
       patientData['vicki.chan'].politicalties.value = 1;
       patientData['vicki.chan'].religiousties.value = 3;
       patientData['vicki.chan'].devtalents.value = 4;
       patientData['vicki.chan'].nowork.value = 4;
       patientData['vicki.chan'].lazy.value = 2;
       patientData['vicki.chan'].duty.value = 6;
       patientData['vicki.chan'].workfirst.value = 3;
       patientData['vicki.chan'].leisuretomeet.value = 5;
       patientData['vicki.chan'].leisuretorelax.value = 7;
       patientData['vicki.chan'].leisureunstruc.value = 3;
       patientData['vicki.chan'].leisurenew.value = 4;
       patientData['vicki.chan'].profilepic.value = 'assets/images/vicki_chan.jpg';

      patientData['mark.dunn'] = R.clone(kPatientInputFields);
      patientData['mark.dunn'].id.value = 'mark.dunn';
      patientData['mark.dunn'].firstname.value = 'Mark';
      patientData['mark.dunn'].lastname.value = 'Dunn';
      patientData['mark.dunn'].lastUpdated.value = moment().unix();
      patientData['mark.dunn'].facility.value = ['5193366551'];
      patientData['mark.dunn'].ohip.value = '2857-124-317 KP';
      patientData['mark.dunn'].roomnum.value = '10A';
      patientData['mark.dunn'].gender.value = 'Her';
      patientData['mark.dunn'].profilepic.value = 'assets/images/mark_dunn.jpg';

      patientData['james.smith'] = R.clone(kPatientInputFields);
      patientData['james.smith'].id.value = 'james.smith';
      patientData['james.smith'].firstname.value = 'James';
      patientData['james.smith'].lastname.value = 'Smith';
      patientData['james.smith'].lastUpdated.value = moment().unix();
      patientData['james.smith'].facility.value = ['5193366551'];
      patientData['james.smith'].ohip.value = '2837-124-117 KP';
      patientData['james.smith'].roomnum.value = '14A';
      patientData['james.smith'].gender.value = 'Him';
      patientData['james.smith'].profilepic.value = 'assets/images/james_smith.jpg';
      
      patientData['alex.writer'] = R.clone(kPatientInputFields);
      patientData['alex.writer'].id.value = 'alex.writer';
      patientData['alex.writer'].firstname.value = 'Alex';
      patientData['alex.writer'].lastname.value = 'Writer';
      patientData['alex.writer'].lastUpdated.value = moment().unix();
      patientData['alex.writer'].facility.value = ['5193366551'];
      patientData['alex.writer'].ohip.value = '4444-124-117 KP';
      patientData['alex.writer'].roomnum.value = '11C';
      patientData['alex.writer'].gender.value = 'Male';
      patientData['alex.writer'].profilepic.value = 'assets/images/alex_writer.jpg';
      
      patientData['danielle.hoffman'] = R.clone(kPatientInputFields);
      patientData['danielle.hoffman'].id.value = 'danielle.hoffman';
      patientData['danielle.hoffman'].firstname.value = 'Danielle';
      patientData['danielle.hoffman'].lastname.value = 'Hoffman';
      patientData['danielle.hoffman'].lastUpdated.value = moment().unix();
      patientData['danielle.hoffman'].facility.value = ['5193366551'];
      patientData['danielle.hoffman'].ohip.value = '2837-333-117 KP';
      patientData['danielle.hoffman'].roomnum.value = '14C';
      patientData['danielle.hoffman'].profilepic.value = 'assets/images/danielle_hoffman.jpg';
      
      patientData['sarah.bedrock'] = R.clone(kPatientInputFields);
      patientData['sarah.bedrock'].id.value = 'sarah.bedrock';
      patientData['sarah.bedrock'].firstname.value = 'Sarah';
      patientData['sarah.bedrock'].lastname.value = 'Bedrock';
      patientData['sarah.bedrock'].lastUpdated.value = moment().unix();
      patientData['sarah.bedrock'].facility.value = ['5193366551'];
      patientData['sarah.bedrock'].ohip.value = '2837-124-222 KP';
      patientData['sarah.bedrock'].roomnum.value = '9A';
      patientData['sarah.bedrock'].profilepic.value = 'assets/images/sarah_bedrock.jpg';
      
      patientData['tammy.chen'] = R.clone(kPatientInputFields);
      patientData['tammy.chen'].id.value = 'tammy.chen';
      patientData['tammy.chen'].firstname.value = 'Tammy';
      patientData['tammy.chen'].lastname.value = 'Chen';
      patientData['tammy.chen'].lastUpdated.value = moment().unix();
      patientData['tammy.chen'].facility.value = ['5193366551'];
      patientData['tammy.chen'].ohip.value = '9999-124-117 KP';
      patientData['tammy.chen'].roomnum.value = '7B';
      patientData['tammy.chen'].profilepic.value = 'assets/images/tammy_chen.jpg';
      
      patientData['chris.gregory'] = R.clone(kPatientInputFields);
      patientData['chris.gregory'].id.value = 'chris.gregory';
      patientData['chris.gregory'].firstname.value = 'Chris';
      patientData['chris.gregory'].lastname.value = 'Gregory';
      patientData['chris.gregory'].lastUpdated.value = moment().unix();
      patientData['chris.gregory'].facility.value = ['5193366551'];
      patientData['chris.gregory'].ohip.value = '2837-999-117 KP';
      patientData['chris.gregory'].roomnum.value = '30C';
      patientData['chris.gregory'].gender.value = 'Male';
      patientData['chris.gregory'].profilepic.value = 'assets/images/chris_gregory.jpg';
      
      patientData['james.red'] = R.clone(kPatientInputFields);
      patientData['james.red'].id.value = 'james.red';
      patientData['james.red'].firstname.value = 'James';
      patientData['james.red'].lastname.value = 'Red';
      patientData['james.red'].lastUpdated.value = moment().unix();
      patientData['james.red'].facility.value = ['5193366551'];
      patientData['james.red'].ohip.value = '2837-124-999 KP';
      patientData['james.red'].roomnum.value = '2C';
      patientData['james.red'].gender.value = 'Male';
      patientData['james.red'].profilepic.value = 'assets/images/james_red.jpg';

      patientData['red.green'] = R.clone(kPatientInputFields);
      patientData['red.green'].id.value = 'red.green';
      patientData['red.green'].firstname.value = 'Red';
      patientData['red.green'].lastname.value = 'Green';
      patientData['red.green'].lastUpdated.value = moment().unix();
      patientData['red.green'].facility.value = ['5193366551'];
      patientData['red.green'].ohip.value = '2837-124-999 KP';
      patientData['red.green'].roomnum.value = '5C';
      patientData['red.green'].gender.value = 'Male';
      patientData['red.green'].profilepic.value = 'assets/images/red_green.jpg';

      patientData['alicia.eiren'] = R.clone(kPatientInputFields);
      patientData['alicia.eiren'].id.value = 'alicia.eiren';
      patientData['alicia.eiren'].firstname.value = 'Alicia';
      patientData['alicia.eiren'].lastname.value = 'Eiren';
      patientData['alicia.eiren'].lastUpdated.value = moment().unix();
      patientData['alicia.eiren'].facility.value = ['5193366551'];
      patientData['alicia.eiren'].ohip.value = '2837-124-999 KP';
      patientData['alicia.eiren'].roomnum.value = '3A';
      patientData['alicia.eiren'].profilepic.value = 'assets/images/alicia_eiren.jpg';

      $localStorage.patientData = {
        version: kAppVersion,
        data: patientData,
        currentPatientId: null
      };

      // Keep in mind data is stored least recent changes to recent changes, so reverse array if needed
      $localStorage.patientHistory = {
        version: kAppVersion,
        data: {}
      };
    }

    currentPatientId = $localStorage.patientData.currentPatientId;
    patientData = $localStorage.patientData.data;

    function savePatientData(patient) {
      var currentFieldsClone = R.values(R.clone(patientData[patient.id.value]));
      patientData[patient.id.value] = patient;
      patientData[patient.id.value].lastUpdated.value = moment().unix();

      var changes = R.filter(function(currentField){
        if(currentField === undefined ||
          currentField.id === undefined ||
          currentField.value === undefined) {
          return false;
        }
        return !R.equals(currentField.value, patientData[patient.id.value][currentField.id].value);
      }, currentFieldsClone);

      if (!$localStorage.patientHistory.data[patient.id.value]) {
        $localStorage.patientHistory.data[patient.id.value] = [];
      }

      $localStorage.patientHistory.data[patient.id.value].push(R.clone(changes));
      $localStorage.patientData.data[patient.id.value] = R.clone(patientData[patient.id.value]);
      userService.setUnseenChangeForPatientId(patient.id.value);
      return true;
    }

    function getPatientDataById(patientId) {
      if (!patientData[patientId]) {
        return null;
      }
      return patientData[patientId];
    }

    function getCurrentPatient(){
      return R.clone(patientData[currentPatientId]);
    }

    function getPreviousPatientFieldValue(fieldId) {
      if (!$localStorage.patientHistory.data[currentPatientId] ||
        !$localStorage.patientHistory.data[currentPatientId].length) {
        return null;
      }

      var found = R.find(R.propEq('id', fieldId),R.last($localStorage.patientHistory.data[currentPatientId]));

      if (found) {
        return found.value;
      } else {
        return null;
      }
    }

    function setCurrentPatient(patient){
      currentPatientId = patient.id.value;
      $localStorage.patientData.currentPatientId = currentPatientId;
    }

    function getPatientDataByFacility(facilityId) {
      var results = {};

      angular.forEach(patientData, function(patient, key) {
          if (patient.facility.value.indexOf(facilityId) !== -1) {
            results[key] = patient;
          }
      });
      return results;
    }

    function getTextFromScaleValue(scaleVal) {
      if(!scaleVal) {
        return '';
      }

      var numToText = {
        1: 'Absolutely Not',
        2: 'Moderately Not',
        3: 'Somewhat Not',
        4: 'Neutral',
        5: 'Somewhat',
        6: 'Moderately',
        7: 'Absolutely'
      };

      return numToText[scaleVal];
    }

    return {
      getPatientDataById: getPatientDataById,
      getPatientDataByFacility: getPatientDataByFacility,
      getPreviousPatientFieldValue: getPreviousPatientFieldValue,
      savePatientData: savePatientData,
      getCurrentPatient: getCurrentPatient,
      setCurrentPatient: setCurrentPatient,
      getTextFromScaleValue: getTextFromScaleValue
    };
  });