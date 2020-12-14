
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Malwee.Repositories.Contracts;
using Malwee.Repositories;
using Malwee.Services;
using Malwee.Services.Contracts;
using Microsoft.EntityFrameworkCore;
using Malwee.Repositories.context;
using Simplify.Config;

namespace Malwee.Api
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.AllowAnyOrigin()
                                      .AllowAnyMethod()
                                      .AllowAnyHeader();
                                  });
            });

            services.AddControllers()
                .AddNewtonsoftJson(options => options.UseMemberCasing())
                .AddNewtonsoftJson(options => options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)
                .AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            var settings = Configuration.GetSection("ConnectionStrings");
            services.Configure<ConnectionString>(settings);

            //##### DI servicos ###########
            services.AddScoped<IOrdemService, OrdemService>();
            services.AddScoped<IClienteService, ClienteService>();
            services.AddScoped<IFornecedorService, FornecedorService>();
           

            //##### DI repos ###########
            services.AddScoped<IOrdemRepository, OrdemRepository>();
            services.AddScoped<IFornecedorRepository, FornecedorRepository>();
            services.AddScoped<IClienteRepository, ClienteRepository>();
           

            var secretKeys = settings.Get<ConnectionString>();

            services.AddDbContext<OrdemContext>(
           options => options.UseSqlServer(secretKeys.Conn));

           // services.AddDbContext<ClienteContext>(
           // options => options.UseSqlServer(secretKeys.Conn));

           // services.AddDbContext<FornecedorContext>(
           //options => options.UseSqlServer(secretKeys.Conn));


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(MyAllowSpecificOrigins);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
