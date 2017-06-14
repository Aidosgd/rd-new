<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{ $admin->social_avatar ? $admin->social_avatar : '/admin/css/images/user2-160x160.jpg' }}" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>{{ $admin->name }}</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <li class="header">MAIN NAVIGATION</li>
            <li class="treeview active">
                <a href="#">
                    <i class="fa fa-dashboard"></i> <span>Dashboard</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="/cp/menus"><i class="fa fa-circle-o"></i> Меню</a></li>
                    <li><a href="/cp/doors"><i class="fa fa-circle-o"></i> Двери</a></li>
                    <li><a href="/cp/pages"><i class="fa fa-circle-o"></i> Cтраницы</a></li>
                    <li><a href="/cp/sliders"><i class="fa fa-circle-o"></i> Слайдер</a></li>
                    <li><a href="/cp/banners"><i class="fa fa-circle-o"></i> Баннер</a></li>
                </ul>
            </li>
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>