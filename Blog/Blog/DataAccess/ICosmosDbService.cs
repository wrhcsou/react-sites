using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Models;

namespace Blog.DataAccess
{
    public interface ICosmosDbService
    {
        Task<IEnumerable<AboutMe>> GetItemsAsync(string query);
        Task<AboutMe> GetItemAsync(string id);
        Task AddItemAsync(AboutMe item);
        Task UpdateItemAsync(string id, AboutMe item);
        Task DeleteItemAsync(string id);
    }
}
