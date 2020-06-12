using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Models;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Fluent;
using Microsoft.Extensions.Configuration;

namespace Blog.DataAccess
{
    public class CosmosDbService : ICosmosDbService
    {
        private Container _container;

        public CosmosDbService(
            CosmosClient dbClient,
            string databaseName,
            string containerName)
        {
            this._container = dbClient.GetContainer(databaseName, containerName);
        }

        public async Task AddItemAsync(AboutMe item)
        {
            await this._container.CreateItemAsync(item, new PartitionKey(item.Id));
        }

        public async Task DeleteItemAsync(string id)
        {
            await this._container.DeleteItemAsync<AboutMe>(id, new PartitionKey(id));
        }

        public async Task<AboutMe> GetItemAsync(string id)
        {
            try
            {
                ItemResponse<AboutMe> response = await this._container.ReadItemAsync<AboutMe>(id, new PartitionKey(id));
                return response.Resource;
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                return null;
            }

        }

        public async Task<IEnumerable<AboutMe>> GetItemsAsync(string queryString)
        {
            var query = this._container.GetItemQueryIterator<AboutMe>(new QueryDefinition(queryString));
            List<AboutMe> results = new List<AboutMe>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results;
        }

        public async Task UpdateItemAsync(string id, AboutMe item)
        {
            await this._container.UpsertItemAsync<AboutMe>(item, new PartitionKey(id));
        }
    }
}
