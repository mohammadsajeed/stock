<template>
    <div class="wrapper">

        <Nav/>
           <Sidbar/>
            <div class="content-wrapper">
              <!-- Content Header (Page header) -->
              <div class="content-header">
                <div class="container-fluid">
                  <div class="row mb-2">
                    <div class="col-sm-6">
                      <h1 class="m-0 text-dark">سیستم مدیریتی گدام های رادیوتلویزون ملی </h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                      <ol class="breadcrumb float-sm-left">
                        <li class="breadcrumb-item"><a href="#">خانه</a></li>
                        <li class="breadcrumb-item active">داشبورد دوم</li>
                      </ol>
                    </div><!-- /.col -->
                  </div><!-- /.row -->
                </div><!-- /.container-fluid -->
              </div>
              <!-- /.content-header -->

              <!-- Main content -->
              <section class="content">
                <div class="container-fluid">
                  <!-- Info boxes -->
                  
                    <router-view>
                    </router-view>
                </div><!--/. container-fluid -->
              </section>
              <!-- /.content -->
            </div>
            <Aside/>
         <Footer/>
</div>
</template>
<script>
import Nav from './frontend/Nav'
import Sidbar from './frontend/Sidbar'
import Aside from './frontend/Aside'
import Footer from './frontend/Footer'
export default{
      components:{
          Nav,
          Sidbar,
          Aside,
          Footer
           
      }
}
</script>
