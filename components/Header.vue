<template>
    <va-navbar color="backgroundPrimary">
        <template #left>
            <va-navbar-item class="logo">
                <va-popover placement="right" :offset="[5, 10]" :auto-hide="false">
                    <va-button color="backgroundPrimary" @click="toggleSidebar">
                        <va-icon name="menu" />
                    </va-button>
                    <template #body>
                        <Shortcut />
                    </template>
                </va-popover>
            </va-navbar-item>
        </template>
        <template #right>
        </template>
    </va-navbar>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useFilterStore } from '~/store/filters';
import { useNavigationStore } from '~~/store/navigation';
const filterStore = useFilterStore();
const { doubleCount } = storeToRefs(filterStore);

const navigationStore = useNavigationStore();
const { toggleSidebar } = navigationStore;

const handleKeydown = (event) => {
    const { key } = event
    if (key && key.toLowerCase() === "m") {
        toggleSidebar();
    }
}

onMounted(() => {
    console.log("Mounted")
    window.addEventListener("keydown", (event) => handleKeydown(event))
})
onUnmounted(() => {
    console.log("Unmounted")
    window.removeEventListener("keydown", handleKeydown);
})
</script>
<style scoped>
.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
</style>

