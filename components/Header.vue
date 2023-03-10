<template>
    <va-navbar color="backgroundPrimary">
        <template #left>
            <va-navbar-item class="logo">
                <va-button color="backgroundPrimary">
                    <va-icon name="menu" />
                </va-button>
            </va-navbar-item>
        </template>
        <template #right>
        </template>
    </va-navbar>
    <Sidebar />
</template>
<style scoped>
.logo {
    font-weight: 600;
    font-size: 1.5rem;
}
</style>
