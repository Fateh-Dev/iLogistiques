using System;
using System.Threading.Tasks;
using AbpDz.Models;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.AspNetCore.SignalR;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore.Modeling;


namespace AbpDz.Notifications
{
    public class AbpDzNotificationHub : AbpHub
    {
        public override Task OnConnectedAsync()
        {
         
            return base.OnConnectedAsync();
        }
    }
}