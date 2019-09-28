<template lang="html">
    <div>
       <Heador />
       <Slider />
       <Novice />
       <Borrow />
       <Money />
       <Product />
       <Life />
       <Footor />
       <Nvabar />
    </div>
</template>

<script>
	import Heador from '../public/header.vue'
	import Footor from '../public/footer.vue'
	import Nvabar from '../public/navbar.vue'
	import Slider from './hsilder.vue'
	import Novice from './novice.vue'
	import Borrow from './borrow.vue'
	import Money from './money.vue'
	import Product from './product.vue'
	import Life from './life.vue'
	
	export default {
		components:{
			Heador,
			Slider,
			Novice,
			Borrow,
			Money,
			Product,
			Life,
			Footor,
			Nvabar
		}
	}
</script>

<style lang="scss" module>

 
</style>
