<template>
    <div>
    <select @change="changeLanguage($event)"  class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
    </select>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'; // Import useI18n for Composition API

// Access i18n instance
const { locale, t } = useI18n();

// Method to change the language
function changeLanguage(event) {
  locale.value = event.target.value; // Update language dynamically
}
</script>
