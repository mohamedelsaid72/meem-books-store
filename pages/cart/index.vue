<template>
  <div class="bg-custom-gradient w-full min-h-[80vh]">
    <div class="container mx-auto px-5 md:px-10">
      <!-- breadcrumb -->
      <div class="flex items-center gap-3 py-5">
        <nuxt-link to="/" class="text-second text-small">الرئيسية</nuxt-link>
        <img src="/left-arrow.svg" alt="left arrow icon" />
        <p class="text-main text-small">سلة الشراء</p>
      </div>

      <div
        v-if="cartStore.cartItems.length > 0"
        class="flex items-start justify-between flex-wrap gap-5"
      >
        <div class="w-full md:flex-1">
          <div class="text-header-1 text-main mb-5">سلة الشراء</div>

          <div
            v-for="item in cartIems"
            :key="item?.id"
            class="w-full flex items-center gap-4 border-b pb-4 mb-4"
          >
            <!-- book image -->
            <div
              class="w-[160px] h-[115px] rounded bg-stroke-gray flex items-center justify-center overflow-hidden"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Vector_Book_blue.svg"
                @error="handleProductImageError"
                alt="book image"
              />
            </div>

            <!-- book info -->
            <div class="flex flex-col gap-2">
              <p class="text-header-4 text-main">
                {{ item.title }}
              </p>
              <p class="text-main-blue text-header-3">{{ item.price }} ر.س</p>
              <p class="flex items-center gap-1 text-small">
                <span class="text-black">الغدد:</span>
                <span class="text-main-blue">{{ item?.quantity }} كتاب</span>
              </p>

              <button
                type="button"
                @click="removeItem(item)"
                class="flex items-center gap-1"
              >
                <img src="/trash.svg" alt="trash icon" class="-mb-1" />
                <span class="underline text-second text-body"
                  >حذف من السلة</span
                >
              </button>
            </div>
          </div>
        </div>

        <div class="w-[359px] h-[362px] rounded bg-white shadow-custom">
          <div class="p-7 border-b">
            <div class="flex items-center justify-between w-full">
              <p class="text-second text-body">المجموع الكلى</p>
              <p class="text-main-blue text-header-2">{{ totalPrice }} ر.س</p>
            </div>
            <div class="mt-5 flex items-center justify-between w-full">
              <p class="text-second text-body">الخصم</p>
              <p class="text-main-blue text-header-2">0 ر.س</p>
            </div>
          </div>
          <div class="px-7 py-3">
            <p class="text-second text-body">هل لديك كود خصم؟</p>
            <div class="flex items-center gap-3 mt-3">
              <input
                type="text"
                class="w-[184px] h-[35px] rounded border px-5 bg-white focus:outline-none"
              />
              <button
                type="button"
                class="w-[90px] h-[35px] rounded bg-main-blue text-white flex items-center justify-center text-small"
              >
                إضافة
              </button>
            </div>
          </div>

          <button
            type="button"
            class="w-[285px] h-[50px] rounded bg-second-yellow rounded-full flex items-center justify-center text-main text-btn-text mx-auto mt-5"
          >
            إشترك الان
          </button>
        </div>
      </div>

      <!-- empty cart -->
      <div v-else class="text-main mt-10">
        <p class="text-header-4">سلة الشراء فارغة</p>
        <p class="mt-5 text-body">افتح المتجر واضف الكتب الي سلة الشراء</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();

const cartIems = computed(() => cartStore.cartItems);

const totalPrice = computed(() =>
  cartIems.value.reduce((total, item) => total + item.price * item.quantity, 0)
);

const removeItem = (item) => {
  cartStore.removeCartItem(item);
};

const handleProductImageError = (event) => {
  event.target.src =
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Vector_Book_blue.svg";
};
</script>

<style lang="scss" scoped></style>
