<template>
  <div>
    <input type="text" class="coupon-code" v-model="code" @input="validate">

    <p v-text="feedback"></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        valid: false,
        code: '',
        coupons: [
          {
            code: '50OFF',
            message: '50% Off!',
            discount: 50
          },
          {
            code: 'FREE',
            message: 'Entirely Free!',
            discount: 100
          }
        ]
      }
    },

    computed: {
      selectedCoupon () {
        return this.coupons.find(coupon => coupon.code == this.code);
      },

      message () {
        return this.selectedCoupon.message;
      },

      feedback () {
          if (this.valid) {
              return `Coupon Redeemed: ${this.message}`;
          }
          return 'Invalid Coupon Code';
        }
    },

    methods: {
      validate () {
        // this.valid = this.coupons.map(coupon => coupon.code).includes(this.code);
        this.valid = !! this.selectedCoupon;

        if (this.valid) {
          // let discount = this.selectedCoupon.discount

          this.$emit('applied', this.selectedCoupon.discount);
        }
      }
    }
  }
</script>
