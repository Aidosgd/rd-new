<!DOCTYPE html>
<html>
<head>
    @include('layouts2019.parts.head')
</head>
<body>

<div class="new-2019">
    @include('layouts2019.parts.header')

    @yield('content')

    @include('layouts2019.parts.footer')
</div>

@include('layouts2019.parts.scripts')

@include('layouts2019.parts.modals')
</body>
</html>