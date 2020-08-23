<template>
  <div>
    <div
      class="card"
      :style="`border-color: ${mainColor}; cursor: ${disabled ? 'default;' : 'pointer;'}`"
      @click="handleSelection"
      @mouseenter="hover = !disabled && true"
      @mouseleave="hover = false"
    >
      <svg class="card__border">
        <path d="M48 2L2 50v418.74a9.26 9.26 45 009.26 9.26h297.48a9.26 9.26 135 009.26-9.26V11.26A9.26 9.26 45 00308.74 2z"
        :style="`fill-opacity:0;stroke:${mainColor};stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`"
        />
      </svg>
      <p
        v-if="hover && selected"
        class="card__top"
        :style="`color: ${mainColor};`"
      >
        Котэ не одобряет?
      </p>
      <p
        v-else class="card__top"
        :style="disabled && 'opacity: 0.5;'"
      >
        Сказочное заморское яство
      </p>
      <h2
        class="card__name"
        :style="disabled && 'opacity: 0.5;'"
      >
        Нямушка
      </h2>
      <h3
        class="card__taste"
        :style="disabled && 'opacity: 0.5;'"
      >
        {{ this.product.name }}
      </h3>
      <p
        class="card__text"
        :style="disabled && 'opacity: 0.5;'"
      >
        {{ this.product.portions }} порций
      </p>
      <p
        class="card__text"
        :style="disabled && 'opacity: 0.5;'"
      >
        {{ this.product.gift }} в подарок
      </p>
      <p
        v-if="product.customerIsHappy"
        class="card__text"
        :style="disabled && 'opacity: 0.5;'"
      >
        Зачазик доволен
      </p>
      <img
        class="card__pic"
        src="../assets/cat.png"
        alt="cat picture"
        :style="disabled && 'opacity: 0.5;'"
      >
      <div
        class="card__circle"
        :style="`background: ${mainColor};`"
      >
        <p class="card__circle__weight">{{ this.product.mass }}</p>
        <p class="card__circle__kg">кг</p>
      </div>
    </div>
    <p
      class="description"
    >
      <span v-if="!selected && !disabled">
        Чего сидишь? Порадуй котэ,
        <button
          @mouseenter="hover = !disabled && true"
          @mouseleave="hover = false"
          @click="handleSelection"
          :style="`color: ${mainColor}`"
        >
          купи
        </button>
        <span :style="`color: ${mainColor}`">.</span>
      </span>
      <span v-if="selected && !disabled">
        {{ product.description }}
      </span>
      <span
        class="description__out"
        v-if="disabled"
      >
        Печалька, {{ product.name }} закончился.
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      selected: false,
      hover: false
    }
  },
  props: {
    product: Object,
    disabled: Boolean
  },
  computed: {
    mainColor () {
      if (this.disabled) {
        return '#b3b3b3'
      }
      if (this.selected) {
        if (this.hover) {
          return '#e52e7a'
        }
        return '#d91667'
      }
      if (this.hover) {
        return '#2ea8e6'
      }
      return '#1698d9'
    }
  },
  methods: {
    handleSelection () {
      if (this.disabled) {
        return
      }
      if (!this.selected) {
        this.hover = false
      }
      this.selected = !this.selected
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 320px;
  height: 480px;
  border-radius: 12px;
  background-image: url("../assets/back.svg");
  background-position: center;
  background-size: contain;
  padding: 20px 50px;
  margin: 0 40px;
  overflow: hidden;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 480px;
    width: 320px;
  }
  &__border {
    z-index: 2;
    pointer-events: none;
  }
  &__top {
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin: 0;
  }
  &__name {
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    margin: 0;
  }
  &__taste{
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin: 0 0 15px 0;
  }
  &__text {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: #666666;
  }
  &__pic {
    position: absolute;
    width: 368px;
    height: 360px;
    left: -24px;
    top: 208px;
    z-index: 1;
  }
  &__circle {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    z-index: 2;
    right: 15px;
    bottom: 15px;
    &__weight {
      display: block;
      font-size: 42px;
      font-weight: 400;
      line-height: 42px;
      margin: 10px auto 0 auto;
      color: white;
      text-align: center;
    }
    &__kg {
      display: block;
      font-size: 22px;
      font-weight: 400;
      line-height: 22px;
      margin: 0 auto;
      color: white;
      text-align: center;
    }
  }
}
.description {
  color: white;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  height: 15px;
  text-align: center;
  margin: 15px 0 30px 0;
  button {
    background: none;
    border: none;
    outline: none;
    padding: 0;
    line-height: 12px;
    border-bottom: dashed 1px;
    cursor: pointer;
  }
  &__out {
    color: #ffff66;
  }
}
@media (max-width: 600px){
  .card {
    margin: 0;
  }
}
</style>
