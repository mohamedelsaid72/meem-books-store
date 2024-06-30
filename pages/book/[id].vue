<template>
  <div class="bg-custom-gradient w-full">
    <div class="container mx-auto px-5 md:px-10">
      <!-- breadcrumb -->
      <div class="flex items-center gap-3 py-5">
        <nuxt-link to="/" class="text-second text-small">الرئيسية</nuxt-link>
        <img src="/left-arrow.svg" alt="left arrow icon" />
        <p class="text-main text-small">المتجر</p>
      </div>

      <!-- book details -->
      <div class="flex items-start justify-between flex-wrap gap-5">
        <!-- book info -->
        <div class="w-full md:flex-1">
          <div class="text-header-1 text-main mb-5">{{ book?.title }}</div>
          <div class="text-main mb-5 text-header-4">اختر نوع الكتاب:</div>

          <form class="flex items-center gap-10 mb-7">
            <div class="flex items-center gap-4">
              <input
                v-model="bookType"
                type="radio"
                name="printed book"
                id="printed_book"
                value="printed"
                class="w-[24px] h-[24px]"
              />
              <label for="printed_book" class="text-main text-header-4"
                >كتاب مطبوع</label
              >
            </div>

            <div class="flex items-center gap-4">
              <input
                v-model="bookType"
                type="radio"
                name="pdf"
                id="pdf"
                value="pdf"
                class="w-[24px] h-[24px]"
              />
              <label for="pdf" class="text-main text-header-4">كتاب  PDF</label>
            </div>
          </form>

          <div class="text-header-2 text-main mb-10">500 ريال</div>

          <div class="flex items-center gap-x-[60px] border-b pb-8">
            <button
              @click="toggleProductInCart(book, count)"
              type="button"
              class="w-[148px] h-[54px] rounded-full bg-second-yellow py-2 px-5 text-center text-btn-text text-main"
            >
              {{
                cartStore.isInCart(book) ? "إزالة من السلة" : "أضف الى السلة"
              }}
            </button>

            <div class="flex items-center gap-5">
              <button
                :disabled="cartStore.isInCart(book)"
                @click="increaseQuantity"
                type="button"
                class="w-[40px] h-[40px] rounded-full flex items-center justify-center border-solid border-blue-icons border-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z"
                    fill="#374957"
                  />
                </svg>
              </button>
              <div class="text-black text-header-4">{{ count }}</div>
              <button
                :disabled="cartStore.isInCart(book)"
                @click="decreaseQuantity"
                type="button"
                class="w-[40px] h-[40px] rounded-full flex items-center justify-center border-solid border-blue-icons border-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11Z"
                    fill="#374957"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- about this book -->
          <div class="mt-5">
            <div class="text-header-3 text-main mb-8">عن الكتاب:</div>
            <div class="text-body text-main">
              {{ book?.description }}
            </div>
          </div>
        </div>

        <!-- book image -->
        <div
          class="w-full md:flex-1 bg-stroke-gray h-[329px] rounded-lg overflow-hidden flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Vector_Book_blue.svg"
            @error="handleProductImageError"
            alt="book image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { fetchBookById } = useApi();
const route = useRoute();
const cartStore = useCartStore();

const book = ref({});

onBeforeMount(async () => {
  const data = await fetchBookById(route.params.id);
  book.value = data;
});

const bookType = ref("");

const handleProductImageError = (event) => {
  event.target.src =
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Vector_Book_blue.svg";
};

const count = ref(1);
const increaseQuantity = () => {
  count.value++;
};
const decreaseQuantity = () => {
  if (count.value > 1) {
    count.value--;
  }
};

const toggleProductInCart = (book, quantity) => {
  const price = 500;
  const pushedObject = { ...book, quantity, price };

  cartStore.toggleProductInCart(pushedObject);
};
</script>

<style lang="scss" scoped></style>
