import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }   from './component/login/login.component';
import { AdminHomePageComponent } from './component/admin-home-page/admin-home-page.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AdminAddStudentComponent } from './component/admin-add-student/admin-add-student.component';
import { AdminAddStaffComponent } from './component/admin-add-staff/admin-add-staff.component';
import { AdminViewStudentComponent } from './component/admin-view-student/admin-view-student.component';
import { AdminViewSupervisorComponent } from './component/admin-view-supervisor/admin-view-supervisor.component';
import { RequestedCompanyComponent } from './component/requested-company/requested-company.component';
import { AdminViewCompanyComponent } from './component/admin-view-company/admin-view-company.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { CompanySignupComponent } from './component/company-signup/company-signup.component';
import { CompanyProfileStudentlistComponent } from './component/company-profile-studentlist/company-profile-studentlist.component';
import { CompanyProfileSelectedstudentComponent } from './component/company-profile-selectedstudent/company-profile-selectedstudent.component';
import { CompanyProfileHomeComponent } from './component/company-profile-home/company-profile-home.component';
import { StudentComponent } from './component/student/student.component';
import { StudentAddDetailComponent } from './component/student-add-detail/student-add-detail.component';
import { StudentEditDetailComponent } from './component/student-edit-detail/student-edit-detail.component';
import { StudentViewDetailComponent } from './component/student-view-detail/student-view-detail.component';
import { StudentAddSuccessComponent } from './component/student-add-success/student-add-success.component';
import { ChatASComponent } from './component/chat-a-s/chat-a-s.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { FeedASComponent } from './component/feed-a-s/feed-a-s.component';
import { MessageASComponent } from './component/message-a-s/message-a-s.component';
import { AdminAnalysisComponent } from './component/admin-analysis/admin-analysis.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { AdminSettingComponent } from './component/admin-setting/admin-setting.component';
import { CompanySignupSuccessComponent } from './component/company-signup-success/company-signup-success.component';
import { AdminViewFullStudentComponent } from './component/admin-view-full-student/admin-view-full-student.component';
import { StuAnalysisComponent } from './component/stu-analysis/stu-analysis.component';
import { CompanyAnalysisComponent } from './component/company-analysis/company-analysis.component';
import { CompanyViewStuFullComponent } from './component/company-view-stu-full/company-view-stu-full.component';
import { StudentSettingComponent } from './component/student-setting/student-setting.component';
import { CompanySettingComponent } from './component/company-setting/company-setting.component';
import { StudentCampanyListComponent } from './component/student-campany-list/student-campany-list.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'adminHomePage', 
    component: AdminHomePageComponent,
    children: [
      { path: 'adminAddUser', 
        component: AddUserComponent,
        children:[
          { path: 'adminAddStudent', component: AdminAddStudentComponent },
          { path: 'adminAddStaff', component: AdminAddStaffComponent }
        ] },
      { path: 'adminViewStudent', component: AdminViewStudentComponent },
      { path: 'adminViewFullStudent', component: AdminViewFullStudentComponent },
      { path: 'adminViewSupervisor', component: AdminViewSupervisorComponent },
      { path: 'requestedCompany', component: RequestedCompanyComponent },
      { path: 'adminViewCompany', component: AdminViewCompanyComponent },
      { path: 'adminAnalysis', component: AdminAnalysisComponent },
      { path: 'adminDashboard', component: DashboardComponent },
      { path: 'adminSetting', component: AdminSettingComponent },
      { path: 'chat-room', component:  ChatRoomComponent},
     

      { path: 'chat-room', component:  ChatRoomComponent,
    children :[
      {path:'feed',component:FeedASComponent}
    ]},
      
      

    ]
  },
  { 
    path: 'companyProfile', 
    component: CompanyProfileComponent,
    children :[
      { path: 'home', component: CompanyProfileHomeComponent },
      { path: 'studentlist', component: CompanyProfileStudentlistComponent },
      { path: 'studentDetails', component: CompanyViewStuFullComponent },
      { path: 'selectedStudentDetail', component: CompanyProfileSelectedstudentComponent },
      { path: 'companyAnalysis', component: CompanyAnalysisComponent },
      { path: 'companySetting', component: CompanySettingComponent },
    ]
  },
  { path: 'companySignup', component: CompanySignupComponent },
  { path: 'companySignupSuccess', component: CompanySignupSuccessComponent },
  { 
    path: 'student', 
    component: StudentComponent,
    children :[
      { path: 'studentAdd', component: StudentAddDetailComponent },
      { path: 'studentAddSuccess', component: StudentAddSuccessComponent },
      { path: 'studentEdit', component: StudentEditDetailComponent },
      { path: 'studentView', component: StudentViewDetailComponent },
      { path: 'studentCompanyList', component: StudentCampanyListComponent },
      { path: 'studentReport', component: StuAnalysisComponent },
      { path: 'chat-room', component: ChatRoomComponent },
      { path: 'studentSetting', component: StudentSettingComponent },
      { path: 'feedback', component: FeedbackComponent },
    ]
  },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}