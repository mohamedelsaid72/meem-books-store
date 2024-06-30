<template>
  <div class="book-card w-[348px] border rounded-lg overflow-hidden">
    <div
      class="relative w-full h-[221px] bg-stroke-gray overflow-hidden flex items-center justify-center"
    >
      <div
        class="absolute bg-white w-[96px] h-[28px] flex items-center justify-center rounded-lg text-secondary-black text-[12px] top-3 right-3"
      >
        <span class="-mt-1">الرخصة المهنية</span>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Vector_Book_blue.svg"
        @error="handleProductImageError"
        alt="book image"
      />
    </div>

    <div class="p-3 text-secondary-black text-header-3">
      <p class="mb-3">{{ book?.title }}</p>
      <p class="mb-3">
        <span>500</span> <span class="text-header-4">ريال</span>
      </p>
      <button
        @click="goToBookDetails(book.id)"
        type="button"
        class="w-full rounded-full bg-main-blue py-2 px-5 text-center text-body text-white mb-2"
      >
        شراء الكتاب
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  book: {
    type: Object,
  },
});

const book = ref(props.book);

const handleProductImageError = (event) => {
  event.target.src =
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Vector_Book_blue.svg";
};

const goToBookDetails = (id) => {
  navigateTo(`/book/${id}`);
};
</script>
