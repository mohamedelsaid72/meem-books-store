<template>
  <div class="bg-custom-gradient w-full">
    <div class="container mx-auto px-5 md:px-10">
      <!-- breadcrumb -->
      <div class="flex items-center gap-3 py-5">
        <p class="text-second text-small">الرئيسية</p>
        <svg
          class="-mb-0.5"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.18982 8.54776C7.12734 8.48578 7.07774 8.41205 7.0439 8.33081C7.01005 8.24957 6.99263 8.16243 6.99263 8.07442C6.99263 7.98641 7.01005 7.89928 7.0439 7.81804C7.07774 7.7368 7.12734 7.66306 7.18982 7.60109L10.2498 4.54776C10.3123 4.48578 10.3619 4.41205 10.3958 4.33081C10.4296 4.24957 10.447 4.16243 10.447 4.07442C10.447 3.98641 10.4296 3.89928 10.3958 3.81804C10.3619 3.7368 10.3123 3.66306 10.2498 3.60109C10.1249 3.47692 9.95595 3.40723 9.77982 3.40723C9.6037 3.40723 9.43473 3.47692 9.30982 3.60109L6.24982 6.66109C5.87529 7.03609 5.66492 7.54442 5.66492 8.07442C5.66492 8.60442 5.87529 9.11275 6.24982 9.48775L9.30982 12.5478C9.434 12.6709 9.6016 12.7404 9.77649 12.7411C9.86423 12.7416 9.9512 12.7248 10.0324 12.6916C10.1137 12.6584 10.1875 12.6095 10.2498 12.5478C10.3123 12.4858 10.3619 12.412 10.3958 12.3308C10.4296 12.2496 10.447 12.1624 10.447 12.0744C10.447 11.9864 10.4296 11.8993 10.3958 11.818C10.3619 11.7368 10.3123 11.6631 10.2498 11.6011L7.18982 8.54776Z"
            fill="#777777"
          />
        </svg>

        <p class="text-main text-small">المتجر</p>
      </div>

      <!-- title & search -->
      <div class="flex items-center gap-5 py-10">
        <p class="text-main text-title">المتجر</p>
        <div
          class="flex items-center gap-3 w-full max-w-[486px] h-[45px] rounded-full border px-5 bg-white"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_145_1514)">
              <path
                d="M15.8044 15.854L11.8251 11.8747C12.9095 10.5484 13.4427 8.8561 13.3143 7.14775C13.1859 5.4394 12.4059 3.84573 11.1355 2.69639C9.86504 1.54705 8.20146 0.92997 6.48883 0.972792C4.77619 1.01561 3.14553 1.71506 1.93414 2.92645C0.722748 4.13784 0.0233032 5.7685 -0.019518 7.48114C-0.0623393 9.19377 0.55474 10.8573 1.70408 12.1278C2.85342 13.3982 4.44709 14.1782 6.15544 14.3066C7.86379 14.435 9.55613 13.9018 10.8824 12.8174L14.8617 16.7967C14.9875 16.9181 15.1559 16.9853 15.3307 16.9838C15.5055 16.9823 15.6727 16.9122 15.7963 16.7886C15.9199 16.665 15.99 16.4978 15.9915 16.323C15.993 16.1482 15.9258 15.9798 15.8044 15.854ZM6.6664 12.992C5.61157 12.992 4.58042 12.6792 3.70336 12.0932C2.8263 11.5072 2.14271 10.6742 1.73904 9.69969C1.33537 8.72515 1.22976 7.65279 1.43554 6.61823C1.64133 5.58366 2.14928 4.63335 2.89516 3.88747C3.64104 3.14159 4.59135 2.63364 5.62592 2.42785C6.66048 2.22207 7.73284 2.32768 8.70738 2.73135C9.68192 3.13502 10.5149 3.8186 11.1009 4.69567C11.6869 5.57273 11.9997 6.60387 11.9997 7.65871C11.9981 9.07271 11.4357 10.4283 10.4359 11.4282C9.43603 12.428 8.0804 12.9905 6.6664 12.992Z"
                fill="#777777"
              />
            </g>
            <defs>
              <clipPath id="clip0_145_1514">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(-0.00012207 0.977539)"
                />
              </clipPath>
            </defs>
          </svg>

          <input
            type="text"
            class="focus:outline-none w-full"
            placeholder="البحث"
            v-model="searchBookTerm"
          />
        </div>
      </div>

      <!-- books list -->
      <div class="flex gap-6 md:justify-between justify-center flex-wrap mt-7">
        <BookCard v-for="book in books" :key="book" :book="book" />
      </div>

      <!-- pagination -->
      <div
        class="flex items-center justify-center gap-2 mt-7 mb-10"
        v-if="books?.length > 0"
      >
        <button
          v-for="i in 5"
          :key="i"
          type="button"
          class="w-[36px] h-[36px] rounded flex items-center justify-center text-small"
          :class="[
            i === 1 ? 'bg-main-blue text-white ' : 'bg-[#F8F7FB] text-second',
          ]"
        >
          {{ i }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/composables/useApi";

definePageMeta({
  layout: "default",
});

const searchBookTerm = ref();

const { fetchBooks } = useApi();

const books = ref([]);
const bookId = ref(1);

onBeforeMount(async () => {
  const data = await fetchBooks(9);
  books.value = data;
});

const cartStore = useCartStore();
</script>
