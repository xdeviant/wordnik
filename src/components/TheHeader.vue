<template>
    <div class="header">
        <router-link class="header__link" to="/">Home</router-link>
        <router-link class="header__link" to="favorites">Starred Words</router-link>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    background: #6EC0FB;

    &__link {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 32px;
        color: #fff;
        text-decoration: none;
        outline: none;
        transition: 0.5s ease;
        &:active, &:hover {
            color: rgba(40, 36, 44, 0.74);
            outline: none;
        }

        &:first-child {
            padding-left: 15px;
        }
        &:last-child {
            padding-right: 15px;
        }
    }
}
</style>