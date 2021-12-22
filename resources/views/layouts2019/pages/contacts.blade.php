@extends('layouts2019.app')
@section('head')
    <style>
        /* Style the tab */
        .tab {
            float: left;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
            width: 30%;
        }

        /* Style the buttons inside the tab */
        .tab button {
            display: block;
            background-color: inherit;
            color: black;
            padding: 22px 16px;
            width: 100%;
            border: none;
            outline: none;
            text-align: left;
            cursor: pointer;
            transition: 0.3s;
            font-size: 17px;
        }

        /* Change background color of buttons on hover */
        .tab button:hover {
            background-color: #ddd;
        }

        /* Create an active/current "tab button" class */
        .tab button.active {
            background-color: #ccc;
        }

        /* Style the tab content */
        .tabcontent {
            float: left;
            padding: 0px 12px;
            width: 70%;
            border-left: none;
        }
        .contacts-menu{
            padding: 0;
            margin-left: -15px;
        }
        .contacts-menu li{
            list-style: none;
        }
        .contacts-menu li a{
            font-size: 16px;
            padding: 15px;
            display: block;
            color: black;
            font-weight: bold;
        }
        .contacts-menu li a:hover{
            background: #ccc;
        }
        .contacts h2, .contacts h1, .contacts p{
            color: black !important;
            font-weight: bold;
        }
        @media (max-width:480px)  {
            .map iframe{
                width: 100% !important;
            }
        }
        .btn-contact{
            padding: 10px;
            background: linear-gradient(to top, #1d100b, #44261c);
            color: white;
            width: 90%;
            margin: auto;
            display: block;
        }
        .btn-contact:hover, .btn-contact:focus{
            color: white;
        }
    </style>
@endsection
@section('content')
    <div style="background: #f2ede6">
        <div class="container" style="padding: 40px 0">
            <div class="contacts" style="padding: 0 20px;">
                {!! $pageName->description !!}
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
    </script>
@endsection