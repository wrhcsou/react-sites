using System;
using Newtonsoft.Json;

namespace Blog.Models
{
    public class WorkHistory
    {
        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "subTitle")]
        public string SubTitle { get; set; }

        [JsonProperty(PropertyName = "role")]
        public string Role { get; set; }

        [JsonProperty(PropertyName = "date")]
        public string Date { get; set; }

        [JsonProperty(PropertyName = "current")]
        public bool Current { get; set; }

        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }
    }
}
