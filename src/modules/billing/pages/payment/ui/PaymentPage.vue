<script setup lang="ts">
import IconChevronRight from ':modules/core/shared/ui/icons/IconChevronRight.vue'
import IconCoinDollarFilled from ':modules/core/shared/ui/icons/IconCoinDollarFilled.vue'
import IconCoinMajesticFilled from ':modules/core/shared/ui/icons/IconCoinMajesticFilled.vue'
import IconCoinRubleFilled from ':modules/core/shared/ui/icons/IconCoinRubleFilled.vue'
import IconEqual from ':modules/core/shared/ui/icons/IconEqual.vue'
import IconMail from ':modules/core/shared/ui/icons/IconMail.vue'
import IconUser from ':modules/core/shared/ui/icons/IconUser.vue'
import IconWallet from ':modules/core/shared/ui/icons/IconWallet.vue'
import { Button } from ':modules/core/shared/ui/uikit/Button'
import { Checkbox } from ':modules/core/shared/ui/uikit/Checkbox'
import { DropdownMenu } from ':modules/core/shared/ui/uikit/DropdownMenu'
import { InputField } from ':modules/core/shared/ui/uikit/InputField'
import { useSeoMeta } from '@unhead/vue'
import { ref } from 'vue'

const servers = [
  'New York',
  'Detroit',
  'Chicago',
  'San Francisco',
  'Atlanta',
  'San Diego',
  'Los Angeles',
  'Miami',
  'Las Vegas',
  'Washington',
  'Dallas',
  'Boston',
  'Houston',
  'Seattle',
  'Phoenix',
  'Denver',
  'Portland',
  'Orlando',
]

const server = ref()

useSeoMeta({
  title: 'Пополнение счёта',
})
</script>

<template>
  <div class="payment-page">
    <main class="payment-page__content">
      <form class="payment-form">
        <header class="payment-form__header">
          <h1 class="payment-form__header-title">
            Пополнение счёта
          </h1>
        </header>

        <div class="payment-form__fields">
          <DropdownMenu
            v-model="server"
            placeholder="Сервер"
            :options="servers"
          />

          <InputField
            readonly
            placeholder="Способ оплаты"
            class="payment-form__field payment-form__field-payment-method"
          >
            <template #icon-right>
              <IconChevronRight />
            </template>
          </InputField>

          <InputField placeholder="Электронная почта">
            <template #icon-left>
              <IconMail />
            </template>
          </InputField>

          <InputField placeholder="Имя персонажа">
            <template #icon-left>
              <IconUser />
            </template>
          </InputField>

          <InputField placeholder="Сумма пополнения">
            <template #icon-left>
              <IconWallet />
            </template>
          </InputField>
        </div>

        <footer class="payment-form__footer">
          <section class="exchange-rate">
            <span class="exchange-rate__label">Курс валюты:</span>

            <div class="exchange-rate__currencies">
              <div class="exchange-rate__currency">
                <IconCoinRubleFilled class="exchange-rate__currency-icon" />
                <span class="exchange-rate__currency-value">1</span>
              </div>

              <IconEqual class="exchange-rate__currencies-separator" />

              <div class="exchange-rate__currency">
                <IconCoinMajesticFilled class="exchange-rate__currency-icon" />
                <span class="exchange-rate__currency-value">2</span>
              </div>

              <IconEqual class="exchange-rate__currencies-separator" />

              <div class="exchange-rate__currency">
                <IconCoinDollarFilled class="exchange-rate__currency-icon" />
                <span class="exchange-rate__currency-value">200</span>
              </div>
            </div>
          </section>

          <Checkbox label="Я ознакомился с условиями оферты" />
        </footer>

        <Button class="payment-form__submit-btn">
          Пополнить счёт
        </Button>
      </form>
    </main>
  </div>
</template>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  gap: .75rem
}

.checkbox input {
  width: 1rem;
  height: 1rem;
  background: red;
}

.payment-page {
  display: flex;
  flex-flow: column;
  flex-grow: 1;

  &__content {
    display: grid;
    place-items: center;
    flex-grow: 1;
  }
}

.exchange-rate {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__currencies {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &-separator {
      color: #686868;
    }
  }

  &__label {
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
  }

  &__currency {
    display: flex;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid var(--color-outline);

    &-icon {
      aspect-ratio: 1;
      width: 1.5rem;
    }

    &-value {
      flex-grow: 1;
      font-weight: var(--font-weight-bold);
      padding-inline-start: 0.5rem;
      padding-inline-end: 1.5rem;
      font-size: 14px;
      user-select: none;
    }
  }
}

.payment-form {
  display: flex;
  flex-flow: column;
  padding: 2.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-outline);
  border-radius: .75rem;
  width: 480px;

  &__header {
    margin-bottom: 2rem;

    &-title {
      font-size: 1.5rem;
      font-weight: var(--font-weight-extrabold);
      text-transform: uppercase;
      text-align: center;
    }
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  &__field-payment-method {
    cursor: pointer;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-block: 2rem;
  }
}
</style>
