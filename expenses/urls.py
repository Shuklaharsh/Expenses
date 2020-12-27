from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('', views.index, name='expenses'),
    path('add-expense', views.add_expense, name='add-expenses'),
    path('expense-edit/<int:id>', views.edit_expense, name='expense-edit'),
    path('expense-delete/<int:id>',views.delete_expense,name='expense-delete'),
    path('search-expense',csrf_exempt(views.search_expense),name='search-expense'),
    path('expense_category_summary',views.expense_category_summary,name='expense_category_summary'),
    path('stats', views.stats_view,name="stats"),
    path('export_csv', views.export_csv,name="export-csv"),
    path('export_excel', views.export_excel,name="export-excel"),
]
