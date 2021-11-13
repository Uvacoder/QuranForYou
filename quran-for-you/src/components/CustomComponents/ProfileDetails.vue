<template>
  <c-box class="profile-details-container">
    <c-heading class="sub-heading">Profile Details</c-heading>
    <c-box>
      <c-flex mt="2vw" align="center">
        <c-image :src="require('@/assets/icons/profile.png')" w="5vw" />
        <c-flex h="2.5vw" ml="2.5vw">
          <custom-button
            :text="'Upload'"
            :padding="'0vw 1vw !important'"
            :fontSize="'1vw !important'"
          />
          <c-box ml="2vw">
            <custom-button
              :text="'Remove'"
              :padding="'0vw 1vw !important'"
              :fontSize="'1vw !important'"
          /></c-box>
        </c-flex>
      </c-flex>
      <c-flex mt="2vw">
        <c-input
          v-model="firstName"
          type="text"
          variant="flushed"
          placeholder="First Name"
          class="auth-input"
          mr="1vw"/>
        <c-input
          v-model="lastName"
          type="text"
          variant="flushed"
          placeholder="Last Name"
          class="auth-input"
          ml="1vw"
      /></c-flex>
      <c-flex mt="1vw">
        <c-input
          v-model="email"
          type="email"
          variant="flushed"
          placeholder="Email Address"
          class="auth-input"
          mr="1vw"
        />
        <c-input
          v-model="email"
          type="number"
          variant="flushed"
          placeholder="Phone Number"
          class="auth-input"
          ml="1vw"
        />
      </c-flex>
      <c-divider mt="2vw" />

      <c-flex mt="1vw" align="center" justify="space-between">
        <c-text fontWeight="900">Password</c-text>
        <c-box h="2.5vw">
          <custom-button
            :text="'Change'"
            :padding="'0vw 1vw !important'"
            :fontSize="'1vw !important'"
          />
        </c-box>
      </c-flex>
      <c-divider mt="1vw" />
      <c-flex justify="center" mt="1vw">
        <c-flex w="25%">
          <custom-button text="Update" :disabled="true"
        /></c-flex>
      </c-flex>
    </c-box>
  </c-box>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import CustomButton from "./CustomButton.vue";
export default {
  name: "ProfileDetails",
  components: { CustomButton },
  data: function() {
    return { firstName: "", lastName: "", email: "", phone: "" };
  },
  computed: { ...mapGetters(["user"]) },
  created() {
    const {
      user_detail: { first_name, last_name, user_email, user_phone },
    } = this.user;
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = user_email;
    this.phone = user_phone;
  },
};
</script>

CustomButton
