<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false);
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
      data-testid="a-dialog"
      role="dialog"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" data-testid="open-dialog-button">
          Open Dialog
        </v-btn>
      </template>

      <v-card>
        <v-card-text>DIALOG_V_CARD_TEXT</v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">
            Close Dialog
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
