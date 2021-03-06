using Microsoft.EntityFrameworkCore;
using WebServerApp.API.Models;

namespace WebServerApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :base(options){}

        public DbSet<Value> Values { get; set; }
    }
}