using System.Collections.Generic;
using System.Threading.Tasks;
using WebServerApp.API.Models;

namespace WebServerApp.API.Data
{
    public interface IUserRepository
    {
         void add<T>(T entity) where T: class;
         void delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         Task<Photo> GetPhoto(int id); 
    }
}