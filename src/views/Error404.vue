<template>  
    <div class="error">
        <div class="error__content">
            <h1 class="title">Error 404</h1>
            <p class="error__text">Что-то пошло не так. Возможно, вы ошиблись, набирая адрес в строке<br> 
            браузера — так бывает. Если вы уверены, что адрес набран верно, то страница,<br>
            скорее всего, была удалена и ее больше нет.</p>
            <p>Но не отчаивайтесь! Смело перейдите на <router-link class="error__link" to="/">главную страницу</router-link>.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .error {
        display: flex;
        justify-content: center;
        margin: 0 15px;

        .title {
            font-size: 36px;
            font-weight: 700;
        }

        &__content {
            font-family: 'Lato', sans-serif;
        }

        &__text {
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 15px;
        }

        &__link {
            color: #09f;
            text-decoration: none;

            &:active, &:hover, &:focus {
                color: #c00;
                outline: none;
            }
        }
    }

    @media (max-width: 699px) {
        .error {
            padding: 0 20px;
        }
    }
</style> 