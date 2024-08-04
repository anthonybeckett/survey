<template>
    <div class="h-25">
        <v-alert
            density="compact"
            v-if="errorMessage"
            type="error"
            variant="outlined"
        >
            <div class="flex justify-between items-center">
                <div>
                    {{errorMessage}}
                </div>

                <div>
                    <span  class="text-2xl cursor-pointer" @click="$emit('closeMessage')">&times;</span>
                </div>
            </div>
        </v-alert>
    </div>
</template>

<script setup>
    const props = defineProps([
        'errorMessage'
    ]);

    console.log(props);
</script>
