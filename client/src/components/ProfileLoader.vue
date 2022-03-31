<template>
  <div>
    <h2>Manage Profiles</h2>
    <p class="help-text">
       Here you can create profiles that include identifying information to help a student recognize who you are.
     </p>
     <alert-block v-if="profileData == null || profileData.length == 0" variant="info" alertMessage="It looks like you don't have any profiles setup yet."></alert-block>
    <profile v-for="profile in profileData" :key="profile.profileId" v-bind="profile"></profile>
  </div>
</template>

<script>
import Profile from './Profile.vue';
import AlertBlock from './AlertBlock.vue';
export default {
  components: { Profile, AlertBlock },
  data(){
    return {
      profileData: null
    }
  },
  created: async function(){
      try {
        //do fetch profiles
        let profileArray =  [
        {
          profileId: '1234',
          profileName: 'KSU SWE6623 Prof',
          fullnameTitle: 'Instructor Evan Vana',
          school: 'Kennesaw State University',
          course: 'SWE6623'
        },
        {
          profileId: '1235',
          profileName: 'KSU CS1101 Prof',
          fullnameTitle: 'Instructor Evan Vana',
          school: 'Kennesaw State University',
        course: 'CS1101'
        }
      ]
      this.profileData = profileArray;

      } catch (error) {
        console.log(error)
      }
  }
}
</script>

<style>

</style>