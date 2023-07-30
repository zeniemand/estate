<!DOCTYPE html>
<html>

{{--@include('front.layuot_head')--}}
@include('front.layout.head')

<body>

<div class="hero_area">
    <!-- header section strats -->
    @yield('header')
    <!-- end header section -->


    @yield('slider')

</div>
<!-- category section -->
    @yield('category')
<!-- end category section -->


<!-- about section -->

@yield('about')


<!-- end about section -->

<!-- job section -->
    @yield('job')
<!-- end job section -->

<!-- expert section -->

    @yield('expert')

<!-- end expert section -->

<!-- info section -->
    @yield('info')
<!-- end info_section -->


<!-- footer section -->
    @include('front.layout.footer')
<!-- footer section -->




</body>

</html>
