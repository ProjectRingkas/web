<template>
  <component :is="whatIcon(icon)"></component>
</template>

<script>
import { 
    HomeIcon, 
    ChevronRightIcon,
    ShoppingCartIcon,
    ArchiveIcon,
    DollarSignIcon,
    ActivityIcon,
    FileTextIcon
} from 'vue-feather-icons'
export default {
    props:['icon'],
    components:{
        HomeIcon,
        ChevronRightIcon,
        ShoppingCartIcon,
        ArchiveIcon,
        DollarSignIcon,
        FileTextIcon,
        ActivityIcon
    },
    methods: {
        whatIcon: function (icon) {
            switch (icon) {
                case 'Home':
                    return 'home-icon';
                case 'ChevronRight':
                    return 'chevron-right-icon';
                case 'ShoppingCart':
                    return 'shopping-cart-icon';
                case 'Archive':
                    return 'archive-icon';
                case 'DollarSign':
                    return 'dollar-sign-icon';
                case 'FileText':
                    return 'file-text-icon';
                case 'Activity':
                    return 'activity-icon';
                default:
                    return 'home-icon';
            }
        }
    }
}
</script>

<style>

</style>